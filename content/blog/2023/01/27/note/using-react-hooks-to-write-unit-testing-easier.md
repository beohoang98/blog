---
category: note
tags:
  - note
  - react
  - unit-testing
  - jest

title: "Using React Hooks to write unit testing easier"
description: Some note about React hook and Jest
date: 2023-01-27T03:57:06.415Z
---

For example, we have a piece of code like this

```tsx
// OrderDetail.tsx

function OrderDetail(props: { orderId: string }) {
  const [permissions, setPermissions] = useState<string[]>([]);
  const [orderDetail, setOrderDetail] = useState<IOrderDetail>(null);

  // logic
  const canApprove = permissions.includes("approve");

  // fetching
  useEffect(() => {
    APIS.getPermissionsFor(props.orderId).then(setPermissions);
    APIS.getOrderDetail(props.orderId).then(setOrderDetail);
  }, [props.orderId]);

  return (
    <Panel>
      <form>
        <input
          placeholder="Title"
          readOnly
          name="title"
          value={orderDetail?.title}
        />
        <input readOnly name="status" value={orderDetail?.status} />

        <hr />
        <button type="submit" name="approve" disabled={!canApprove}>
          Approve
        </button>
      </form>
    </Panel>
  );
}
```

There are 2 units to test

- How element looks like when I can approve it?

- How element looks like when I CANNOT approve it?

So we write a test

To test, we should mock the `APIS.getPermissionsFor` function

```tsx
// OrderDetail.test.tsx

describe("OrderDetail", () => {
  beforeEach(() => {
    jest.spyOn(APIS, "getOrderDetail").mockImplementation(() => {
      return { title: "title", status: "whatever" };
    });
  });

  test("can approve", () => {
    jest.spyOn(APIS, "getPermissionsFor").mockImplementation(() => {
      return ["approve"];
    });

    const { getByRole } = render(<OrderDetail orderId="ABC123" />);
    expect(getByRole("button", { name: "approve" })).not.toHaveAttribute(
      "disabled"
    );
  });

  test("cannot approve", () => {
    jest.spyOn(APIS, "getPermissionsFor").mockImplementation(() => {
      return [];
    });

    const { getByRole } = render(<OrderDetail {...testProps} />);
    expect(getByRole("button", { name: "approve" })).toHaveAttribute(
      "disabled"
    );
  });
});
```

Okay that fine, but there will have more code added

```diff
// OrderDetail.tsx

function OrderDetail(props: { orderId: string }) {
  const [permissions, setPermissions] = useState<string[]>([]);
  const [orderDetail, setOrderDetail] = useState<IOrderDetail>(null);

  // logic
-  const canApprove = permissions.includes("approve");
+  const canApprove = permissions.includes("approve") && orderDetail?.status === "pending";

  // fetching
  useEffect(() => {
    APIS.getPermissionsFor(props.orderId).then(setPermissions);
    APIS.getOrderDetail(props.orderId).then(setOrderDetail);
  }, [props.orderId]);

  return (
    <Panel>
      <form>
        <input
          placeholder="Title"
          readOnly
          name="title"
          value={orderDetail?.title}
        />
        <input readOnly name="status" value={orderDetail?.status} />

        <hr />
        <button type="submit" name="approve" disabled={!canApprove}>
          Approve
        </button>
      </form>
    </Panel>
  );
}
```

Then we have to update the test with 2 addition cases

```tsx
// OrderDetail.test.tsx

describe("OrderDetail", () => {
  test("can approve & status is pending", () => {
    jest.spyOn(APIS, "getPermissionsFor").mockImplementation(() => {
      return ["approve"];
    });

    jest.spyOn(APIS, "getOrderDetail").mockImplementation(() => {
      return { title: "title", status: "pending" };
    });

    const { getByRole } = render(<OrderDetail orderId="ABC123" />);
    expect(getByRole("button", { name: "approve" })).not.toHaveAttribute(
      "disabled"
    );
  });

  test("can approve & status is not pending", () => {
    jest.spyOn(APIS, "getPermissionsFor").mockImplementation(() => {
      return ["approve"];
    });

    jest.spyOn(APIS, "getOrderDetail").mockImplementation(() => {
      return { title: "title", status: "whatever" };
    });

    const { getByRole } = render(<OrderDetail orderId="ABC123" />);
    expect(getByRole("button", { name: "approve" })).toHaveAttribute(
      "disabled"
    );
  });

  test("cannot approve & status is pending", () => {
    jest.spyOn(APIS, "getPermissionsFor").mockImplementation(() => {
      return [];
    });

    jest.spyOn(APIS, "getOrderDetail").mockImplementation(() => {
      return { title: "title", status: "pending" };
    });

    const { getByRole } = render(<OrderDetail orderId="ABC123" />);
    expect(getByRole("button", { name: "approve" })).toHaveAttribute(
      "disabled"
    );
  });

  test("cannot approve & status is not pending", () => {
    jest.spyOn(APIS, "getPermissionsFor").mockImplementation(() => {
      return [];
    });

    jest.spyOn(APIS, "getOrderDetail").mockImplementation(() => {
      return { title: "title", status: "whatever" };
    });

    const { getByRole } = render(<OrderDetail orderId="ABC123" />);
    expect(getByRole("button", { name: "approve" })).toHaveAttribute(
      "disabled"
    );
  });
});
```

That's fine too, but we can do better with hooks

```tsx
// useOrderDetail.ts
export function useOrderDetail(orderId: string) {
  const [permissions, setPermissions] = useState<string[]>([]);
  const [orderDetail, setOrderDetail] = useState<IOrderDetail>(null);

  useEffect(() => {
    APIS.getPermissionsFor(orderId).then(setPermissions);
    APIS.getOrderDetail(orderId).then(setOrderDetail);
  }, [orderId]);

  return { permissions, orderDetail };
}
```

Then the `OrderDetail` component will be

```diff
// OrderDetail.tsx
+ import { useOrderDetail } from "./useOrderDetail";

function OrderDetail(props: { orderId: string }) {
-  const [permissions, setPermissions] = useState<string[]>([]);
-  const [orderDetail, setOrderDetail] = useState<IOrderDetail>(null);
+  const { permissions, orderDetail } = useOrderDetail(props.orderId);

   // logic
   const canApprove = permissions.includes("approve") && orderDetail?.status === "pending";

-  // fetching
-  useEffect(() => {
-    APIS.getPermissionsFor(props.orderId).then(setPermissions);
-    APIS.getOrderDetail(props.orderId).then(setOrderDetail);
-  }, [props.orderId]);

  return (
    <Panel>
      <form>
        <input
          placeholder="Title"
          readOnly
          name="title"
          value={orderDetail?.title}
        />
        <input readOnly name="status" value={orderDetail?.status} />

        <hr />
        <button type="submit" name="approve" disabled={!canApprove}>
          Approve
        </button>
      </form>
    </Panel>
  );
}
```

Then the test will be

```diff
// OrderDetail.test.tsx
+ import * as OrderDetailHooks from "./useOrderDetail";

describe("OrderDetail", () => {
  test("can approve & status is pending", () => {
+    jest.spyOn(OrderDetailHooks, "useOrderDetail").mockImplementation(() => {
+      return {
+        permissions: ["approve"],
+        orderDetail: { title: "title", status: "pending" },
+      };
+    });
-    jest.spyOn(APIS, "getPermissionsFor").mockImplementation(() => {
-      return ["approve"];
-    });
-
-    jest.spyOn(APIS, "getOrderDetail").mockImplementation(() => {
-      return { title: "title", status: "pending" };
-    });

    const { getByRole } = render(<OrderDetail orderId="ABC123" />);
    expect(getByRole("button", { name: "approve" })).not.toHaveAttribute(
      "disabled"
    );
  });

  // other tests like this
});
```

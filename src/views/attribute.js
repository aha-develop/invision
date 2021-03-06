import React from "react";
import { EmbeddedContentAttribute } from "@aha-develop/aha-develop-react";

aha.on("inVisionAttribute", ({ record, fields }, { identifier }) => {
  return (
    <EmbeddedContentAttribute
      identifier={identifier}
      record={record}
      fields={fields}
      product="InVision"
      placeholder="https://projects.invisionapp.com/embed/..."
    />
  );
});
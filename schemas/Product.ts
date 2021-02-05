import { integer, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Product = list({
  // Todo
  // access:
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    status: select({
      options: [
        { label: "Draft", value: "DRAFT" },
        { label: "Available", value: "AVAIABLE" },
        { label: "Unavailable", value: "UNAVAIABLE" },
      ],
      defaultValue: "DRAFT",
      ui: {
        displayMode: "segmented-control",
        createView: { fieldMode: "hidden" },
      },
    }),
    price: integer(),
    // Todo Photo
  },
});

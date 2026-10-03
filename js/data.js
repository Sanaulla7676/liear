const PRODUCTS = [
  {id:"p01", name:"Windows Touchscreen POS", category:"Touch Screen POS", group:"Touch POS", preview:"assets/products/01-windows-touchscreen-pos.webp", desc:"Windows touchscreen POS hardware designed for modern retail and restaurant counters.", features:["Touchscreen checkout","Windows based","Business-ready setup","Easy installation"], rating:"4.9"},
  {id:"p02", name:"Android Touchscreen POS", category:"Touch Screen POS", group:"Touch POS", preview:"assets/products/02-android-touchscreen-pos.webp", desc:"Android touchscreen POS hardware for fast, clean and flexible counter billing.", features:["Android interface","Touchscreen checkout","Compact counter setup","Easy deployment"], rating:"4.8"},
  {id:"p03", name:"Thermal Printer", category:"Thermal Printers", group:"Printers", preview:"assets/products/03-thermal-printer.webp", desc:"Compact thermal receipt printer for dependable everyday checkout printing.", features:["Thermal receipt printing","Compact footprint","Fast daily workflow","Simple setup"], rating:"4.8"},
  {id:"p04", name:"Barcode Scanner", category:"Barcode Scanners", group:"Barcode Solutions", preview:"assets/products/04-barcode-scanner.webp", desc:"Handheld barcode scanner for quick product identification at the billing counter.", features:["Fast scanning workflow","Handheld design","Retail-ready","Easy installation"], rating:"4.8"},
  {id:"p05", name:"Barcode Printer", category:"Barcode Printers", group:"Printers", preview:"assets/products/05-barcode-printer.webp", desc:"Barcode label printer for clean product and inventory identification.", features:["Barcode label printing","Compact counter use","Retail-ready workflow","Easy media loading"], rating:"4.8"},
  {id:"p07", name:"Cash Counting Machine", category:"Cash Counting", group:"Cash Handling", preview:"assets/products/07-cash-counting-machine.webp", desc:"Cash counting equipment designed for faster and more organized cash handling.", features:["Cash counting workflow","Counter-friendly footprint","Daily business use","Simple operation"], rating:"4.7"},
  {id:"p08", name:"Barcode Labels", category:"Barcode Labels", group:"Accessories", preview:"assets/products/08-barcode-labels.webp", desc:"Barcode label media for organized product identification and stock workflows.", features:["Barcode-ready labels","Clean print surface","Retail inventory use","Easy application"], rating:"4.7"},
  {id:"p09", name:"Wax Ribbon Black", category:"Wax Ribbons", group:"Accessories", preview:"assets/products/09-wax-ribbon-black.webp", desc:"Black wax ribbon consumable for compatible barcode and label printing workflows.", features:["Black print ribbon","Label printing use","Clean output","Ready for business use"], rating:"4.7"},
  {id:"p10", name:"Cash Drawer", category:"Cash Drawers", group:"Cash Handling", preview:"assets/products/10-cash-drawer.webp", desc:"Secure cash drawer designed to pair with billing and POS counter setups.", features:["Organized cash storage","Counter-ready design","POS workflow support","Practical daily use"], rating:"4.7"},
  {id:"p11", name:"Wax Ribbon Purple", category:"Wax Ribbons", group:"Accessories", preview:"assets/products/11-wax-ribbon-purple.webp", desc:"Purple wax ribbon consumable for compatible barcode and label printing workflows.", features:["Purple print ribbon","Label printing use","Clean output","Ready for business use"], rating:"4.7"},
  {id:"p12", name:"Computer System Desktop Setup", category:"Computer Systems", group:"Systems", preview:"assets/products/12-computer-system-desktop.webp", desc:"Complete desktop computer setup for billing, software and everyday business operations.", features:["Desktop workstation","Billing software ready","Business counter setup","Everyday productivity"], rating:"4.8"},
  {id:"p13", name:"Billing Machine", category:"Billing Machines", group:"Billing Devices", preview:"assets/products/13-billing-machine.webp", desc:"Practical billing hardware for businesses that need a dependable daily checkout workflow.", features:["Billing counter workflow","Receipt-ready setup","Compact design","Local support"], rating:"4.8"}
];

const PRODUCT_GROUPS = [
  {label:"All Products", value:"All"},
  {label:"Touch POS", value:"Touch POS"},
  {label:"Printers", value:"Printers"},
  {label:"Barcode Solutions", value:"Barcode Solutions"},
  {label:"Cash Handling", value:"Cash Handling"},
  {label:"Accessories", value:"Accessories"},
  {label:"Systems", value:"Systems"},
  {label:"Billing Devices", value:"Billing Devices"}
];

function productImagePath(product,index=1){
  return product?.preview || "";
}

const PRODUCTS=[
{id:"p01",name:"Windows Touchscreen POS",folder:"01-windows-touchscreen-pos",image:"01-windows-touchscreen-pos.webp",category:"Touch Screen POS",views:4},
{id:"p02",name:"Android Touchscreen POS",folder:"02-android-touchscreen-pos",image:"02-android-touchscreen-pos.webp",category:"Touch Screen POS",views:4},
{id:"p03",name:"Thermal Printer",folder:"03-thermal-printer",image:"03-thermal-printer.webp",category:"Thermal Printers",views:4},
{id:"p04",name:"Barcode Scanner",folder:"04-barcode-scanner",image:"04-barcode-scanner.webp",category:"Barcode Scanners",views:3},
{id:"p05",name:"Barcode Printer",folder:"05-barcode-printer",image:"05-barcode-printer.webp",category:"Barcode Printers",views:4},
{id:"p07",name:"Cash Counting Machine",folder:"07-cash-counting-machine",image:"07-cash-counting-machine.webp",category:"Cash Counting",views:4},
{id:"p08",name:"Barcode Labels",folder:"08-barcode-labels",image:"08-barcode-labels.webp",category:"Barcode Labels",views:1},
{id:"p09",name:"Wax Ribbon Black",folder:"09-wax-ribbon-black",image:"09-wax-ribbon-black.webp",category:"Wax Ribbons",views:2},
{id:"p10",name:"Cash Drawer",folder:"10-cash-drawer",image:"10-cash-drawer.webp",category:"Cash Drawers",views:3},
{id:"p11",name:"Wax Ribbon Purple",folder:"11-wax-ribbon-purple",image:"11-wax-ribbon-purple.webp",category:"Wax Ribbons",views:3},
{id:"p12",name:"Computer System Desktop Setup",folder:"12-computer-system-desktop-setup",image:"12-computer-system-desktop.webp",category:"Computer Systems",views:4},
{id:"p13",name:"Billing Machine",folder:"13-billing-machine",image:"13-billing-machine.webp",category:"Billing Machines",views:4}
];
const PRODUCT_ASSET_ROOT="assets/products/";
function productImagePath(product,index=1){
  if(index!==1 && product._gallery && product._gallery[index-1]) return product._gallery[index-1];
  return PRODUCT_ASSET_ROOT+product.image;
}
function productViewSlug(product,index){ return null; }

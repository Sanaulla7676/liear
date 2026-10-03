const PRODUCTS=[
{id:"p01",name:"Windows Touchscreen POS",folder:"01-windows-touchscreen-pos",category:"Touch Screen POS",views:4},
{id:"p02",name:"Android Touchscreen POS",folder:"02-android-touchscreen-pos",category:"Touch Screen POS",views:4},
{id:"p03",name:"Thermal Printer",folder:"03-thermal-printer",category:"Thermal Printers",views:4},
{id:"p04",name:"Barcode Scanner",folder:"04-barcode-scanner",category:"Barcode Scanners",views:3},
{id:"p05",name:"Barcode Printer",folder:"05-barcode-printer",category:"Barcode Printers",views:4},
{id:"p07",name:"Cash Counting Machine",folder:"07-cash-counting-machine",category:"Cash Counting",views:4},
{id:"p08",name:"Barcode Labels",folder:"08-barcode-labels",category:"Barcode Labels",views:1},
{id:"p09",name:"Wax Ribbon Black",folder:"09-wax-ribbon-black",category:"Wax Ribbons",views:2},
{id:"p10",name:"Cash Drawer",folder:"10-cash-drawer",category:"Cash Drawers",views:3},
{id:"p11",name:"Wax Ribbon Purple",folder:"11-wax-ribbon-purple",category:"Wax Ribbons",views:3},
{id:"p12",name:"Computer System Desktop Setup",folder:"12-computer-system-desktop-setup",category:"Computer Systems",views:4},
{id:"p13",name:"Billing Machine",folder:"13-billing-machine",category:"Billing Machines",views:4}
];
function productImagePath(product,index=1){return `assets/products/${product.folder}/${String(index).padStart(2,"0")}-${productViewSlug(product,index)}.png`;}
function productViewSlug(product,index){
 const maps={
  p01:["front-three-quarter","side-opposite-three-quarter","rear-connectivity-view","alternative-three-quarter-view"],
  p02:["front-three-quarter","side-three-quarter","rear-connectivity-view","alternative-three-quarter-view"],
  p03:["front-three-quarter","side-three-quarter","rear-connectivity-view","open-paper-mechanism"],
  p04:["front-three-quarter","side-opposite-three-quarter","rear-top-functional-view"],
  p05:["front-three-quarter","rear-three-quarter","rear-connectivity-view","open-label-mechanism-view"],
  p07:["front-three-quarter","rear-three-quarter","rear-connectivity-view","open-functional-view"],
  p08:["barcode-labels"],
  p09:["provided-wax-ribbon","provided-wax-ribbon-2"],
  p10:["front-three-quarter","opposite-three-quarter","open-drawer-functional-view"],
  p11:["provided-wax-ribbon-purple","provided-wax-ribbon-purple-2","provided-wax-ribbon-purple-3"],
  p12:["front-complete-desktop-setup","rear-three-quarter-view","rear-connectivity-view","underside-component-view"],
  p13:["front-three-quarter-view","rear-right-connectivity-view","rear-left-connectivity-view","underside-functional-view"]
 };
 return maps[product.id][index-1];
}

export const SidebarData = [
  {
    title: "Employee",
    path: "#",
    class: "ic-user",
    permission:"view employee",
    subNav: [
      {
        name: "All Employee",
        path: "/all-employee",
        permission:"view employee"
      },
      {
        name: "Add Employee",
        path: "/create-employee",
        permission:"add employee"
      },
      {
        name: "Roles",
        path: "/all-roles",
        permission:"view roles"
      },
      {
        name: "Add Role",
        path: "/add-role",
        permission:"add role"
      },
      {
        name: "All Jobs",
        path: "/all-jobs",
        permission:"view jobs"
      },
      {
        name: "Add Job",
        path: "/add-job",
        permission:"add job"
      },
      {
        name:"All Assigned Job",
        path:"/assigned-jobs",
        permission:"view assigned jobs"
      },
      {
        name:"Assign New Job",
        path:"/assign-new-job",
        permission:"assign new job"
      }
    ],
  },
  {
    title: "Users",
    path: "/all-users",
    class: "ic-user",
    permission:"view users"
  },
  {
    title: "Listings",
    path: "#",
    class: "ic-li",
    permission:"view listings",
    subNav: [
      {
        name: "All Listings",
        path: "/admin-all-listings",
        permission:"view listings"

      },
      {
        name:"Add  Listing",
        path:"/add-new-listing",
        permission:"add listing"
      },
      {
        name: "New Listing Request",
        path: "/new-listing-request",
        permission:"view listing request"
      },
      {
        name:"All Claim Request",
        path:"/new-claim-request",
        permission:"view claim request"
      },
    ],
  },
  {
    title: "Category",
    path: "#",
    class: "ic-li",
    permission:"view listing category",
    subNav: [
      {
        name: "Listing Category",
        path: "/all-listing-category",
        permission:"view listing category"
      },
      {
        name: "Add Listing Category",
        path: "/add-listing-category",
        permission:"add listing category"
      },
      {
        name: "Listing Sub Category",
        path: "/all-listing-sub-category",
        permission:"view listing sub category"
      },
      {
        name: "Add Listing Sub Category",
        path: "/add-listing-sub-category",
        permission:"add listing sub category"
      },
    ],
  },
  {
    title: "Events",
    path: "#",
    class: "ic-eve",
    permission:"view events",
    subNav: [
      {
        name: "All Events",
        path: "/admin-event",
        permission:"view events"
      },
      {
        name: "New Event Request",
        path: "/new-event-request",
        permission:"view event request"
      },
    ],
  },
  {
    title: "Products",
    path: "/all-products",
    class: "ic-prod",
    permission:"view products",
    subNav: [
      {
        name: "All Products",
        path: "#",
        permission:"view products"
      },
      {
        name: "New Product Request",
        path: "#",
        permission:"view product request"
      },
      {
        name: "Product Category",
        path: "/admin-all-product-category",
        permission:"view product category"
      },
      {
        name: "Add Product Category",
        path: "/admin-add-new-product-category",
        permission:"add product category"
      },
      {
        name: "Product Sub Category",
        path: "/admin-all-product-sub-category",
        permission:"view product sub category"
      },
      {
        name: "Add Product Sub Category",
        path: "/admin-add-new-product-sub-category",
        permission:"add product sub category"
      },
    ],
  },
  {
    title: "All Payments",
    path: "/admin-all-payments",
    class: "ic-pay",
    permission:"view payments"
  },
  {
    title: "Coupon and deals",
    path: "#",
    class: "ic-coup",
    permission:"view coupons",
    subNav: [
      {
        name: "All Coupons",
        path: "/all-coupons",
        permission:"view coupons"
      },
      {
        name: "Add New Coupon",
        path: "/add-new-coupon",
        permission:"add coupon"
      },
    ],
  },

  {
    title: "Enquiry & Get Quote",
    path: "#",
    class: "ic-enq",
    permission:"view company enquiry, view client enquiry",
    subNav: [
      {
        name: "Company Enquiry",
        path: "/company-enquiry",
        permission:"view company enquiry"
      },
      {
        name: "Client Enquiry",
        path: "/client-enquiry",
        permission:"view client enquiry"
      },
    ],
  },
  {
    title: "Reviews",
    path: "#",
    class: "ic-rev",
    permission:"view reviews",
    subNav: [
      {
        name: "All Reviews",
        path: "/admin-all-reviews",
        permission:"view reviews"
      },
    ],
  },
  {
    title: "Feedbacks",
    path: "#",
    class: "ic-febk",
    subNav: [
      {
        name: "All Feedbacks",
        path: "/admin-all-feedbacks",
      },
    ],
  },
  {
    title: "All Notifications",
    path: "/all-notifications",
    class: "ic-noti",
    permission:"view notifications"
  },
  {
    title: "Home Page",
    path: "#",
    class: "ic-hom",
    subNav: [
      {
        name: "Top Section",
        path: "/Top Section",
      },
      {
        name: "Choose Category",
        path: "/admin-home-category",
      },
      {
        name: "admin-trending-category",
        path: "/Choose Trending Category",
      },
      {
        name: "Popular Business",
        path: "/admin-home-popular-business",
      },
      {
        name: "Top Services",
        path: "/admin-home-top-services",
      },
      {
        name: "Feature Events",
        path: "/admin-home-feature-events",
      },
      {
        name: "Home page template",
        path: "/home-page-template",
      },
    ],
  },
  {
    title: "Location",
    path: "#",
    class: "ic-cou",
    subNav: [
      {
        name: "All State",
        path: "/admin-all-state",
      },
      {
        name: "Add New State",
        path: "/admin-add-state",
      },
      {
        name: "All City",
        path: "/admin-all-city",
      },
      {
        name: "Add New City",
        path: "/admin-add-city",
      },
      {
        name: "All Area",
        path: "/admin-all-area",
      },
      {
        name: "Add New Area",
        path: "/admin-add-area",
      },
    ],
  },
  {
    title: "Invoice",
    path: "#",
    class: "ic-inv",
    subNav: [
      {
        name: "Create new Invoice",
        path: "/admin-invoice-create",
      },
      {
        name: "Send Invoice",
        path: "/admin-send-invoice",
      },
      {
        name: "Shared Invoices",
        path: "/admin-invoice-shared",
      },
    ],
  },

  {
    title: "Footer",
    path: "#",
    class: "ic-sub",
    subNav: [
      {
        name: "admin-footer",
        path: "/Footer CMS",
      },
      {
        name: "Footer popular tags",
        path: "/admin-footer-popular-tags",
      },
    ],
  },
  {
    title: "Slider Images",
    path: "#",
    class: "ic-slid",
    subNav: [
      {
        name: "All Slider Images",
        path: "/admin-slider-all",
      },
      {
        name: "Add New Slider",
        path: "/admin-slider-create",
      },
    ],
  },
  {
    title: "All Text Changes",
    path: "/admin-text-changes",
    class: "ic-txt",
  },
  {
    title: "Pricing Plans",
    path: "/admin-price",
    class: "ic-pri",
  },
  {
    title: "Payment gateway",
    path: "/admin-payment-credentials",
    class: "ic-pay",
  },
  {
    title: "Setting",
    path: "/admin-setting",
    class: "ic-set",
  },
  {
    title: "Activation",
    path: "/activate",
    class: "ic-act",
  },
  {
    title: "Mail Templates",
    path: "/admin-all-mail",
    class: "ic-mail",
  },
  {
    title: "Social media share",
    path: "/admin-social-share",
    class: "ic-soci",
  },
];

import React from "react";

export const SidebarData = [
    {
        title: "Dashboard",
        path: "#",
        class: "ic-db",
    },
    {
        title: " Users",
        path: "#",
        class: "ic-user",
        subNav: [
            {
                name: "New User Requests",
                path: "/admin/admin-new-user-requests",
            },
            {
                name: " New COD Payment Requests",
                path: "/admin/admin-new-cod-requests",
            },
            {
                name: "All Users",
                path: "/admin/admin-all-users",
            },
            {
                name: "All Users - General",
                path: "/admin/admin-all-users-general",
            },
            {
                name: "All Users - Service Providers",
                path: "/admin/admin-all-users-service-provider",
            },
            {
                name: "Free Users",
                path: "/admin/admin-free-users",
            },
            {
                name: "Standard Users",
                path: "/admin/admin-standard-users",
            },
            {
                name: "Premium Users",
                path: "/admin/admin-premium-users",
            },
            {
                name: "Premium Plus Users",
                path: "/admin/admin-premium-plus-users",
            },
            {
                name: "All Non-Paid Users",
                path: "/admin/admin-non-paid-users",
            },
            {
                name: "All Paid Users",
                path: "/admin/admin-paid-users",
            },
            {
                name: "Add new User",
                path: "/admin/admin-add-new-user",
            },
        ],
    },
    {
        title: "listings",
        path: "#",
        class: "ic-li",
        subNav: [
            {
                name: "All listings",
                path: "/admin/admin-all-listings",
            },
            {
                name: "Add new listings",
                path: "/admin/admin-add-new-listings",
            },
            {
                name: "Create duplicate listings",
                path: "/admin/admin-create-duplicate-listing",
            },
            {
                name: "All Claim Requests",
                path: "/admin/admin-claim-listing",
            },
            {
                name: "Trash listings",
                path: "/admin/admin-trash-listing",
            },
        ],
    },
    {
        title: " Listing Promotions",
        path: "#",
        class: "ic-poi",
        subNav: [
            {
                name: "All Promotions",
                path: "/admin/admin-all-promotions",
            },
            {
                name: "Create New Promotions",
                path: "/admin/admin-promote-now",
            },
            {
                name: "All Points History",
                path: "/admin/admin-all-points",
            },
            {
                name: "Points Setting",
                path: "/admin/admin-point-setting",
            },
        ],
    },
    {
        title: "Events",
        path: "#",
        class: "ic-eve",
        subNav: [
            {
                name: "All Events",
                path: "/admin/admin-event",
            },
            {
                name: "Add New Events",
                path: "/admin/admin-add-new-event",
            },
        ],
    },
    {
        title: "Blogs",
        path: "#",
        class: "ic-blo",
        subNav: [
            {
                name: "All Blogs",
                path: "/admin/admin-all-blogs",
            },
            {
                name: "Add new Blogs",
                path: "/admin/admin-add-new-blogs",
            },
        ],
    },
    {
        title: "Products",
        path: "#",
        class: "ic-prod",
        subNav: [
            {
                name: "All Products",
                path: "/admin/admin-all-products",
            },
            {
                name: "Add new Product",
                path: "/admin/admin-add-new-product",
            },
        ],
    },
    {
        title: "All Payments",
        path: "/admin/admin-all-payments",
        class: "ic-pay",
    },
    {
        title: "Coupon and deals",
        path: "#",
        class: "ic-coup",
        subNav: [
            {
                name: "All Coupons",
                path: "/admin/admin-coupons",
            },
            {
                name: "Add new coupon",
                path: "/admin/admin-add-new-coupons",
            },
        ],
    },
    {
        title: "Listing Category",
        path: "#",
        class: "ic-cat",
        subNav: [
            {
                name: "All Category",
                path: "/admin/admin-all-category",
            },
            {
                name: "Add new Category",
                path: "/admin/admin-add-new-category",
            },
            {
                name: "All Sub Category",
                path: "/admin/admin-all-sub-category",
            },
            {
                name: "Add new Sub Category",
                path: "/admin/admin-add-new-sub-category",
            },
        ],
    },
    {
        title: "Product Category",
        path: "#",
        class: "ic-cat",
        subNav: [
            {
                name: "All Category",
                path: "/admin/admin-all-product-category",
            },
            {
                name: "Add new Category",
                path: "/admin/admin-add-new-product-category",
            },
            {
                name: "All Sub Category",
                path: "/admin/admin-all-product-sub-category",
            },
            {
                name: "Add new Sub Category",
                path: "/admin/admin-add-new-product-sub-category",
            },
        ],
    },
    {
        title: "  Enquiry & Get Quote",
        path: "#",
        class: "ic-enq",
        subNav: [
            {
                name: "All Enquiry",
                path: "/admin/admin-all-enquiry",
            },
            {
                name: "Saved Enquiry",
                path: "/admin/admin-saved-enquiry",
            },
        ],
    },
    {
        title: "Reviews",
        path: "#",
        class: "ic-rev",
        subNav: [
            {
                name: "All Reviews",
                path: "/admin/admin-all-reviews",
            },
            {
                name: "Saved Reviews",
                path: "/admin/admin-saved-reviews",
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
                path: "/admin/admin-all-feedbacks",
            },
        ],
    },
    {
        title: "Send Notifications",
        path: "#",
        class: "ic-noti",
        subNav: [
            {
                name: "All Notifications",
                path: "/admin/admin-notification-all",
            },
            {
                name: "Create New Notifications",
                path: "/admin/admin-create-notification",
            },
        ],
    },
    {
        title: "Ads",
        path: "#",
        class: "ic-ads",
        subNav: [
            {
                name: "Current Ads",
                path: "/admin/admin-current-ads",
            },
            {
                name: "Create new Ads",
                path: "/admin/admin-create-ads",
            },
            {
                name: "Ad Request & Enquiry",
                path: "/admin-ads-request",
            },
            {
                name: "Ad Pricing",
                path: "/admin/admin-ads-price",
            },
            {
                name: "Google AdSense",
                path: "/admin/seo-google-adsense",
            },
        ],
    },
    {
        title: "Home Page",
        path: "#",
        class: "ic-hom",
        subNav: [
            {
                name: "Top Section",
                path: "/admin/Top Section",
            },
            {
                name: "Choose Category",
                path: "/admin/admin-home-category",
            },
            {
                name: "admin-trending-category",
                path: "/admin/Choose Trending Category",
            },
            {
                name: "Popular Business",
                path: "/admin-home-popular-business",
            },
            {
                name: "Top Services",
                path: "/admin/admin-home-top-services",
            },
            {
                name: "Feature Events",
                path: "/admin/admin-home-feature-events",
            },
            {
                name: "Home page template",
                path: "/admin/home-page-template",
            },
        ],
    },
    {
        title: "Country",
        path: "#",
        class: "ic-cou",
        subNav: [
            {
                name: "All Country",
                path: "/admin/admin-all-country",
            },
            {
                name: "Add New Country",
                path: "/admin/admin-add-country",
            },
        ],
    },
    {
        title: "City",
        path: "#",
        class: "ic-cit",
        subNav: [
            {
                name: "All City",
                path: "/admin/admin-all-city",
            },
            {
                name: "Add New City",
                path: "/admin/admin-add-city",
            },
        ],
    },
    {
        title: "Listing Filter",
        path: "#",
        class: "ic-fil",
        subNav: [
            {
                name: "All Filters",
                path: "/admin/admin-all-filters",
            },
            {
                name: "Features",
                path: "/admin/admin-filter-features",
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
                path: "/admin/admin-invoice-create",
            },
            {
                name: "Send Invoice",
                path: "/admin/admin-send-invoice",
            },
            {
                name: "Shared Invoices",
                path: "/admin/admin-invoice-shared",
            },
        ],
    },
    {
        title: "Import &amp; Export",
        path: "#",
        class: "ic-imp",
        subNav: [
            {
                name: "Import Data",
                path: "/admin/admin-import",
            },
            {
                name: "Export Data",
                path: "/admin/admin-export",
            },
        ],
    },
    {
        title: "Sub Admin",
        path: "#",
        class: "ic-sub",
        subNav: [
            {
                name: "All Sub Admins",
                path: "/admin/admin-sub-admin-all",
            },
            {
                name: "Create new Sub Admin",
                path: "/admin/admin-sub-admin-create",
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
                path: "/admin/admin-footer-popular-tags",
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
                path: "/admin/admin-slider-all",
            },
            {
                name: "Add New Slider",
                path: "/admin/admin-slider-create",
            },
        ],
    },
    {
        title: "All Text Changes",
        path: "/admin/admin-text-changes",
        class: "ic-txt",
    },
    {
        title: "Pricing Plans",
        path: "/admin/admin-price",
        class: "ic-pri",
    },
    {
        title: "Payment gateway",
        path: "/admin/admin-payment-credentials",
        class: "ic-pay",
    },
    {
        title: "Setting",
        path: "/admin/admin-setting",
        class: "ic-set",
    },
    {
        title: "Activation",
        path: "/admin/activate",
        class: "ic-act",
    },
    {
        title: "Mail Templates",
        path: "/admin/admin-all-mail",
        class: "ic-mail",
    },
    {
        title: "Social media share",
        path: "/admin/admin-social-share",
        class: "ic-soci",
    },
];

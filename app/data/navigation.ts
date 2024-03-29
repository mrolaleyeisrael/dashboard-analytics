import { box, category, profile, trendUp, discount, infoCircle, arrowRight, logout, settings, brightness, brightness2, moon, moon2 } from "../assets"


export type NavigationItemsProp = {
  icon: string,
  linkName: string
}


export const NavigationItems = [

  {
    icon: category,
    linkName: "Category"
  },

  {
    icon: trendUp,
    linkName: "UpTrend"
  },
  {
    icon: profile,
    linkName: "Profile"
  },
  {
    icon: box,
    linkName: "Box"
  },

  {
    icon: discount,
    linkName: "Discount"
  },

  {
    icon: infoCircle,
    linkName: "Information Circle"
  },
]

export const lowerNavigation = [
  {
    icon: settings,
    linkName: "Setting"
  },

  {
    icon: arrowRight,
    linkName: "Arrow right"
  },

  {
    icon: logout,
    linkName: "Logout"
  },
]

export const themeNavigation = [
  {
    icon: brightness,
    linkName: "Light Mode"
  },

  {
    icon: moon2,
    linkName: "Dark Mode"
  },
]


export const themeNavigation2 = [
  {
    icon: brightness2,
    linkName: "Light Mode"
  },

  {
    icon: moon,
    linkName: "Dark Mode"
  },
]
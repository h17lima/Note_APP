import { application } from "./application"

// Importe e registre todos os controladores

import SidebarController from "./sidebar_controller"
application.register("sidebar", SidebarController)

import ThemeController from "./theme_controller"
application.register("theme", ThemeController)
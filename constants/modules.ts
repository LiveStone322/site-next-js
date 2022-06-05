import { ModuleEnum, ModuleModel } from "../models/moduleModel"

const MAIN: ModuleModel = {
  id: ModuleEnum.Main,
  name: 'Главная страница',
  link: '/',
}

const BLOG: ModuleModel = {
  id: ModuleEnum.Blog,
  name: 'Блог',
  link: '/blog',
}

const LIBRARY: ModuleModel = {
  id: ModuleEnum.Library,
  name: 'Моя библиотека',
  link: '/library',
}

const MODULES = [
  MAIN,
  BLOG,
  LIBRARY
]

export default MODULES;
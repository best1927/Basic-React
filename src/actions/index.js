export const LOAD_ROOT_MENUS = "LOAD_ROOT_MENUS";
export function loadRootMenus(moduleCode, schemaCode) {
    return {
        type: LOAD_ROOT_MENUS,
        payload: {
            moduleCode: moduleCode,
            schemaCode: schemaCode
        }
    };
}
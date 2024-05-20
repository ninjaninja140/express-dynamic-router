type TextListType = {
	success: string;
	method_error: string;
	passive_route: string;
	inline_code: string;
	unknown: string;
	function: string;
	controller_not_found: string;
	action_not_found: string;
	middleware_not_found: string;
	action_with_controller: string;
	router_file_not_found: string;
	app_is_required: string;
	routers_is_required: string;
	routers_is_empty: string;
	folders_is_required: string;
	routerFiles_is_required: string;
	folders_routers_is_required: string;
	server_is_running: string;
};

const textList: TextListType = {
	success: 'Success',
	method_error: 'Method Not Allowed',
	passive_route: 'Passive Route',
	inline_code: 'Inline Code',
	unknown: 'Unknown',
	function: 'Function',
	controller_not_found: 'Controller Not Found',
	action_not_found: 'Action Not Found',
	middleware_not_found: 'Middleware Not Found',
	action_with_controller: 'Action With Controller',
	router_file_not_found: 'Router File Not Found',
	app_is_required: 'app is required',
	routers_is_required: 'routers is required',
	routers_is_empty: 'routers is empty',
	folders_is_required: 'folders is required',
	routerFiles_is_required: 'routerFiles is required',
	folders_routers_is_required: 'folders.routers is required',
	server_is_running: 'Server is running on',
};

export default textList;

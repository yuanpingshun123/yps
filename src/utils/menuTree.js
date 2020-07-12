export const systemTree = [
	{
		id: "7",
		text: "订单管理",
		state: null,
		checked: false,
		attributes: {
			icon: "el-icon-document",
			url: "order/order"
		},
		hasParent: false,
		hasChildren: false
	},
	{
		id: "8",
		text: "产品管理",
		state: null,
		checked: false,
		attributes: {
			icon: "el-icon-present",
			url: null
		},
		children: [
			{
				id: "9",
				text: "天猫产品",
				state: null,
				checked: false,
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "productManagement/tmallPd"
				},
				parentId: "3",
				hasParent: false,
				hasChildren: true
			},
			{
				id: "16",
				text: "产品模板",
				state: null,
				checked: false,
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "productManagement/templateList"
				},
				parentId: "3",
				hasParent: false,
				hasChildren: true
			},
			{
				id: "15",
				text: "素材库",
				state: null,
				checked: false,
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "productManagement/materialLibrary"
				},
				parentId: "3",
				hasParent: false,
				hasChildren: true
			}
		],
		parentId: "3",
		hasParent: false,
		hasChildren: true
	},
	{
		id: "3",
		text: "系统管理",
		state: null,
		checked: false,
		attributes: {
			icon: "el-icon-s-tools",
			url: null
		},
		children: [
			{
				id: "7",
				text: "角色管理",
				state: null,
				checked: false,
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "system/Role"
				},
				parentId: "3",
				hasParent: true,
				hasChildren: true
			},
			{
				id: "72",
				text: "商家管理",
				state: null,
				checked: false,
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "system/Studio"
				},
				parentId: "3",
				hasParent: false,
				hasChildren: true,

				children:[
					{
						id: "10",
						text: "工厂产品",
						state: null,
						checked: false,
						meta:{
							index:'/system/Studio',
						},
						attributes: {
							icon: "icon-cat-skuQuery",
							url: "productManagement/factoryProducts"
						},
						parentId: "72",
						hasParent: false,
						hasChildren: false
					},
				]
			},
			{
				id: "71",
				text: "账号管理",
				state: null,
				checked: false,
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "system/account"
				},
				parentId: "3",
				hasParent: false,
				hasChildren: true
			},
			{
				id: "73",
				text: "图片合成机器",
				state: null,
				checked: false,
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "system/imageMachine"
				},
				parentId: "3",
				hasParent: false,
				hasChildren: true
			}
		],
		parentId: "0",
		hasParent: false,
		hasChildren: true
	},
];


export const shopTree = [{
		id: "91",
		text: "订单管理",
		state: null,
		checked: false,
		attributes: {
			icon: "el-icon-document",
			url: "order/order"
		},
		children: [
			{
				id: "27",
				text: "天猫订单",
				state: null,
				checked: false,
				attributes: {
					icon: "li-icon-zhifuguanli",
					url: "tmOrderForm/index"
				},
				parentId: "91",
				hasParent: true,
				hasChildren: true
			},
			{
				id: "28",
				text: "自建订单",
				state: null,
				checked: false,
				attributes: {
					icon: "li-icon-zhifuguanli",
					url: "addOrder/index"
				},
				parentId: "91",
				hasParent: true,
				hasChildren: true
			},
			{
				id: "29",
				text: "售后订单",
				state: null,
				checked: false,
				attributes: {
					icon: "li-icon-zhifuguanli",
					url: "afterSaleList/index"
				},
				parentId: "91",
				hasParent: true,
				hasChildren: true
			}
		],
		parentId: "0",
		hasParent: false,
		hasChildren: true
	},
	{
		id: "18",
		text: "图片管理",
		state: null,
		checked: false,
		attributes: {
			icon: "el-icon-picture-outline",
			// url: "imgCompound/index"
		},
		hasChildren: true,
		children: [
			{
				id: "9",
				text: "手动合成复查",
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "imgCompound/index"
				},
				parentId: "18",
				hasParent: false,
			},
			{
				id: "10",
				text: "合成监控",
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "imgCompound/synthesisMonitor"
				},
				parentId: "18",
				hasParent: false,
			}
		]
	},
	{
		id: "8",
		text: "产品管理",
		state: null,
		checked: false,
		attributes: {
			icon: "el-icon-present",
			url: null
		},
		children: [
			{
				id: "9",
				text: "天猫产品",
				state: null,
				checked: false,
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "productManagement/tmallProduct"
				},
				parentId: "3",
				hasParent: false,
				hasChildren: true
			},
			{
				id: "10",
				text: "自建产品",
				state: null,
				checked: false,
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "productManagement/customProducts"
				},
				parentId: "3",
				hasParent: false,
				hasChildren: true,
			},
			{
				id: "12",
				text: "工厂产品",
				state: null,
				checked: false,
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "productManagement/factoryProducts"
				},
				parentId: "3",
				hasParent: false,
				hasChildren: true
			},
			{
				id: "11",
				text: "赠品列表",
				state: null,
				checked: false,
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "productManagement/giftList"
				},
				parentId: "3",
				hasParent: false,
				hasChildren: true
			},
			{
				id: "16",
				text: "产品模板",
				state: null,
				checked: false,
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "productManagement/templateList"
				},
				parentId: "3",
				hasParent: false,
				hasChildren: true
			},
			{
				id: "15",
				text: "素材库",
				state: null,
				checked: false,
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "productManagement/materialLibrary"
				},
				parentId: "3",
				hasParent: false,
				hasChildren: true
			}
		],
		parentId: "0",
		hasParent: false,
		hasChildren: true
	},
	{
		id: "4",
		text: "账号管理",
		state: null,
		checked: false,
		hasParent: true,
		hasChildren: true,
		attributes: {
			icon: "el-icon-s-custom",
			url: null
		},
		children: [{
			id: "7",
			text: "账号中心",
			state: null,
			checked: false,
			attributes: {
				icon: "icon-cat-skuQuery",
				url: "accountManagement/accountCenter"
			},
			parentId: "4",
			hasParent: true,
			hasChildren: true
		},
			{
				id: "8",
				text: "入驻工厂",
				state: null,
				checked: false,
				attributes: {
					icon: "icon-cat-skuQuery",
					url: "accountManagement/checkInFactory"
				},
				parentId: "4",
				hasParent: true,
				hasChildren: true
			}
		]
	}
];

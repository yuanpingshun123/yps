import axios from 'axios';
import {reqExpost,ajaxGet,ajaxPost} from './request';
// //获取登录页的信息
export const reqStudioConfig = params => ajaxPost({ url: `/studio/config`, special:true, params });

// //注册
export const postregister = params => ajaxPost({url: `/studio/register`,params})

//天猫商户登录
export const login = params => ajaxPost({url: `tmall/shop/login`,params})
// 获取商家列表
export const tmallShopList = params => ajaxGet({url: `tmall/shop/list`,params})
// 图片合成机器列表
export const imgCompositeComputerList = params => ajaxGet({url: `imgComposite/getCompositeComputerList`,params})
// 新增天猫商家
export const tmallShopAdd = params => ajaxPost({url: `tmall/shop/add`,params})
// 启用或禁用天猫商家
export const tmallShopStatus = params => ajaxPost({url: `tmall/shop/status`,params})

// 赠品信息》------------------------
// 赠品信息》获取赠品列表
export const productGiftList = params => ajaxGet({url: `product/gift/list`,params})
// 赠品信息》获取赠品分类列表
export const productGiftCategoryList= params => ajaxGet({url: `product/gift/category/list`,params})
// 赠品信息》添加赠品分类
export const productGiftCategoryAdd= params => ajaxPost({url: `product/gift/category/add`,params})
// 赠品信息》添加赠品分类
export const productGiftyAdd= params => ajaxPost({url: `product/gift/add`,params})
// 赠品信息》删除赠品
export const productGiftRemove= params => ajaxPost({url: `product/gift/remove`,params})
// 赠品信息》删除赠品分类(赠品分类暂无管理地方，没有删除的入口)
export const productGiftCategoryRemove= params => ajaxPost({url: `product/gift/category/remove`,params})

// 素材库 -----------------------------------
// 素材库》获取素材列表
export const productMaterialList = params => ajaxGet({url: `product/material/list`,params})
//素材库》获取共享素材库
export const productMaterialListShare = params => ajaxGet({url: `product/material/list/share`,params})
// 素材库》获取素材分类、风格列表
export const productMaterialCategoryList = params => ajaxGet({url: `product/material/category/list`,params})
// 尺寸
export const productMaterialSizeList = params => ajaxGet({url: `product/material/size/list`,params})
// 素材库》删除素材
export const productMaterialRemove = params => ajaxPost({url: `product/material/remove`,params})
// 素材库》添加素材
export const productMaterialAdd = params => ajaxPost({url: `product/material/add`,params})
// 素材库》添加素材分类、风格
export const productMaterialCategoryAdd = params => ajaxPost({url: `product/material/category/add`,params})
// 素材库》购买共享素材
export const productMaterialBuy = params => ajaxPost({url: `product/material/buy`,params})

// 工厂产品 -----------
//工厂产品》获取已通过审核的工厂列表
export const tmallShopFactoryAllowList = params => ajaxGet({url: `tmall/shop/factory/allow/list`,params})
//工厂产品》获取工厂的产品分类
export const tmallShopFactoryErpProductCategory = params => ajaxGet({url: `tmall/shop/factory/erp/product/category`,params})
//工厂产品》分页获取sku信息
export const tmallshopfactoryerpproductlist = params => ajaxGet({url: `tmall/shop/factory/erp/product/list`,params})
//工厂产品》商家使用sku
export const tmallShopFactoryErpProductUse = params => ajaxPost({url: `tmall/shop/factory/erp/product/use`,params})
// 工厂产品》已获取产品库
export const tmallShopFactorySkuList = params => ajaxGet({url: `tmall/shop/factory/sku/list`,params})
// 工厂产品-详情
export const tmallShopFactoryErpIndex = params => ajaxGet({url: `tmall/shop/factory/erp/index`,params})
// 工厂产品库 》一键获取
export const tmallShopFactoryErpProductUseBatch = params => ajaxPost({url: `tmall/shop/factory/erp/product/use/batch`,params})



//订单管理 -----------
// 搜索商家产品
export const shopSkuList = params => ajaxGet({url: `tmall/shop/sku/list`,params})

//获取省市区信息
export const shopAreaList = params => ajaxGet({url: `tmall/shop/area/list`,params})

//新建订单
export const shopOrderAdd = params => ajaxPost({url: `tmall/shop/order/add`,params})
//分页获取订单列表
export const shopOrderList = params => ajaxGet({url: `tmall/shop/order/list`,params})

// 获取订单详情
export const shopOrderIndex = params => ajaxGet({url: `tmall/shop/order/index`,params})

//调整订单明细关联的赠品信息
export const shopOrderGift = params => ajaxPost({url: `/tmall/shop/order/gift`,params})

//修改订单的收货人信息
export const receiverAddress = params => ajaxPost({url: `/tmall/shop/order/receiver/address`,params})
//发货地址管理
//新增或编辑地址
export const addressAdd = params => ajaxPost({url: `tmall/shop/address/add`,params})

//获取发货地址列表
export const getAddressList = params => ajaxGet({url: `tmall/shop/address/list`,params})

//设置默认地址
export const addressDefault = params => ajaxPost({url: `tmall/shop/address/default`,params})


// 自建产品

//获取自建产品列表
export const getCustomList = params => ajaxGet({url: `tmall/shop/sku/custom/list`,params})

//已获取产品库
export const getSkuList = params => ajaxGet({url: `tmall/shop/factory/sku/list`,params})

//已获取产品库
export const customAdd = params => ajaxPost({url: `tmall/shop/sku/custom/add`,params})

//关联赠品
//获取已关联赠品列表
export const getGiftList = params => ajaxGet({url: `tmall/shop/sku/gift/list`,params})

//关联赠品
export const giftAdd = params => ajaxPost({url: `tmall/shop/sku/gift/add`,params})

//删除天猫产品已关联的赠品
export const giftRemove = params => ajaxPost({url: `tmall/shop/sku/gift/remove`,params})

//申请绑定工厂
export const factoryBind = params => ajaxPost({url: `tmall/shop/factory/bind`,params})

//获取工厂绑定列表
export const factoryList = params => ajaxGet({url: `tmall/shop/factory/list`,params})

//获取当前登录用户归属的商家信息
export const shopIndex = params => ajaxGet({url: `tmall/shop/index`,params})

//系统审核天猫商家的工厂绑定申请
export const factoryCheck = params => ajaxPost({url: `tmall/shop/factory/check`,params})

//获取指定工厂的影楼信息
export const erpStudio = params => ajaxGet({url: `tmall/shop/erp/studio`,params})

//获取工厂绑定统计信息
export const factoryCnt = params => ajaxGet({url: `tmall/shop/factory/cnt`,params})




//产品模板
//产品分类列表
export const categoryList = params => ajaxGet({url: `template/category/list`,params})
//产品风格列表
export const styleList = params => ajaxGet({url: `template/style/list`,params})
//产品模板》分页查看产品模板
export const pageListTemplate = params => ajaxPost({url: `template/pageListTemplate`,params})
//p数列表
export const pnumberList = params => ajaxGet({url: `template/pnumber/list`,params})
//尺寸列表
export const sizeList = params => ajaxGet({url: `template/size/list`,params})

//产品模板》新增或编辑产品模板
export const saveTemplate = params => ajaxPost({url: `template/saveTemplate`,params})

//产品模板》获取产品模板
export const getTemplate = params => ajaxGet({url: `template/getTemplate`,params})

//产品模板》添加或修改模板页
export const saveTemplatePage = params => ajaxPost({url: `templatePage/saveTemplatePage`,params})
//定稿
export const commitTemplate = params => ajaxPost({url: `template/commitTemplate`,params})

//删除模板
export const deleteTemplate = params => ajaxPost({url: `template/deleteTemplate`,params})
//删除模板页
export const deleteTemplatePage = params => ajaxPost({url: `templatePage/deleteTemplatePage`,params})

//复制模板
export const copyTemplate = params => ajaxPost({url: `template/copyTemplate`,params})

//模板关联》分页获取(未)关联的商品列表
export const skuPageList = params => ajaxGet({url: `tmallShopSkuTemplate/skuPageList`,params})

//保存关联结果
export const saveTemplateSkuLink = params => ajaxPost({url: `tmallShopSkuTemplate/saveTemplateSkuLink`,params})

//购买模板
export const buyTemplate = params => ajaxPost({url: `template/buyTemplate`,params})

// 产品模板》批量添加照片
export const addAlbumPic = params => ajaxPost({url: `diyShopAlbum/addAlbumPic`,params})

//产品模板》分页获取相册
export const pageListShopAlbum = params => ajaxPost({url: `diyShopAlbum/pageListShopAlbum`,params})
//产品模板》分页获取照片

export const pageListShopAlbumPic = params => ajaxPost({url: `diyShopAlbum/pageListShopAlbumPic`,params})

//删除相册
export const deleteAlbum = params => ajaxPost({url: `diyShopAlbum/deleteAlbum`,params})

//删除diy图片
export const deleteAlbumPic = params => ajaxPost({url: `diyShopAlbum/deleteAlbumPic`,params})

// 天猫产品-----
// 模板关联》分页获取(未)关联的模板列表
export const tmallShopSkuTemplatePageList = params => ajaxPost({url: `tmallShopSkuTemplate/templatePageList`,params})
export const tmallShopSkuTempSaveTempSkuLink = params => ajaxPost({url: `tmallShopSkuTemplate/saveTemplateSkuLink`,params})

//
// diy模板排序
export const updatePageNumber = params => ajaxPost({url: `template/updatePageNumber`,params})

// 图片合成》查询当前设置信息
export const imgCompositeGetCompositeSetting = params => ajaxGet({url: `imgComposite/getCompositeSetting`,params})
//图片合成》保存当前设置信息
export const imgCompositeSaveCompositeSetting = params => ajaxPost({url: `imgComposite/saveCompositeSetting`,params})
//图片管理》合成监控
export const imgCompositeListCompositeCheckPage = params => ajaxGet({url: `imgComposite/listCompositeCheckPage`,params})
//图片管理》手动合成复查
export const imgCompositeListDiyCheckPage = params => ajaxGet({url: `imgComposite/listDiyCheckPage`,params})

//生成diy链接
export const getDiyPathe = params => ajaxGet({url: `template/getDiyPath`,params})
// 图片管理 》图片合成
export  const imgCompositeGetDiyData = params => ajaxGet({url:`imgComposite/getDiyData`,params})
// 重新合成图片(整体图片合成)
export  const reCompositeDiy = params => ajaxPost({url:`imgComposite/reCompositeDiy`,params})
// 重新合成图片(单个图片合成)
export  const reCompositeDiyPage = params => ajaxPost({url:`imgComposite/reCompositeDiyPage`,params})



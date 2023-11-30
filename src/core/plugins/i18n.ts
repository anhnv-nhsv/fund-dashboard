import { createI18n } from "vue-i18n";

const messages = {
  vi: {
    home: "Trang chủ",
    dashboard: "Dashboard",
    banner: "Banner",
    bannerManagement: "Quản lý banner",
    layoutBuilder: "Layout builder",
    craft: "Crafted",
    pages: "Trang",
    profile: "Hồ sơ",
    profileOverview: "Tổng quan hồ sơ",
    projects: "Dự án",
    campaigns: "Chiến dịch",
    documents: "Tài liệu",
    connections: "Kết nối",
    wizards: "Hướng dẫn",
    horizontal: "Ngang",
    vertical: "Dọc",
    account: "Tài khoản",
    accountOverview: "Tổng quan tài khoản",
    settings: "Cài đặt",
    authentication: "Xác thực",
    basicFlow: "Luồng cơ bản",
    signIn: "Đăng nhập",
    signUp: "Đăng ký",
    passwordReset: "Đặt lại mật khẩu",
    multiStepSignUp: "Đăng ký đa bước",
    error404: "Lỗi 404",
    error500: "Lỗi 500",
    apps: "Ứng dụng",
    chat: "Trò chuyện",
    privateChat: "Trò chuyện riêng",
    groupChat: "Trò chuyện nhóm",
    drawerChat: "Trò chuyện thanh bên",
    widgets: "Tiện ích",
    widgetsLists: "Danh sách",
    widgetsStatistics: "Thống kê",
    widgetsCharts: "Biểu đồ",
    widgetsMixed: "Kết hợp",
    widgetsTables: "Bảng",
    widgetsFeeds: "Tin tức",
    changelog: "Nhật ký thay đổi",
    docsAndComponents: "Tài liệu & Thành phần",
    megaMenu: "Menu cực lớn",
    exampleLink: "Liên kết ví dụ",
    modals: "Cửa sổ",
    general: "Chung",
    inviteFriends: "Mời bạn bè",
    viewUsers: "Xem người dùng",
    upgradePlan: "Nâng cấp gói",
    shareAndEarn: "Chia sẻ & Kiếm tiền",
    forms: "Biểu mẫu",
    newTarget: "Mục tiêu mới",
    newCard: "Thẻ mới",
    newAddress: "Địa chỉ mới",
    createAPIKey: "Tạo khóa API",
    twoFactorAuth: "Xác thực hai yếu tố",
    createApp: "Tạo ứng dụng",
    createAccount: "Tạo tài khoản",
    documentation: "Tài liệu",
    components: "Thành phần",
    resources: "Tài nguyên",
    activity: "Hoạt động",
    customers: "Khách hàng",
    gettingStarted: "Bắt đầu",
    customersListing: "Danh sách khách hàng",
    customerScoreListing: "Điểm khách hàng",
    customerDetails: "Chi tiết khách hàng",
    calendarApp: "Lịch",
    subscriptions: "Đăng ký",
    getStarted: "Bắt đầu",
    subscriptionList: "Danh sách đăng ký",
    addSubscription: "Thêm đăng ký",
    viewSubscription: "Xem đăng ký",
    statistics: "Thống kê",
    requestStatistics: "Thống kê yêu cầu",
    pageManagement: "Quản lý trang",
    pageList: "Danh sách trang",
    addPage: "Thêm trang",
    news: "Tin tức",
    newsCategory: "Danh mục tin tức",
    newsList: "Danh sách tin tức",
    addNews: "Thêm tin tức",
    contact: "Liên hệ",
    contactCategory: "Danh mục liên hệ",
    contactList: "Danh sách liên hệ",
    addContact: "Thêm liên hệ",
    user: "Người dùng",
    fund: "Danh sách lệnh",
    fundInformation: "Thông tin Quỹ",
    fundDeclaration: "Khai báo Quỹ",
    to: "To",
    userMgmt: "Quản lý người dùng",
    report: "Báo cáo",
    reportCategory: "Danh mục báo cáo",
    reportList: "Danh sách báo cáo",
    addBtn: "Thêm mới",
    editBtn: "Sửa",
    deleteBtn: "Xoá",
    searchBtn: "Tìm kiếm",
    search: "Tìm kiếm",
    rearrange: "Sắp xếp lại",
    name: "Tên",
    image: "Hình ảnh",
    url: "URL",
    status: "Trạng thái",
    action: "Thao tác",
    index: "STT",
    categoryName: "Tên danh mục",
    postTime: "Thời gian đăng",
    reportTime: "Thời gian báo cáo",
    fullname: "Họ tên",
    email: "Email",
    content: "Nội dung",
    time: "Thời gian",
    role: "Vai trò",
    fileManager: "Quản lý file",
    addBanner: "Thêm mới banner",
    editBanner: "Sửa banner",
    publish: "Xuất bản",
    chooseFile: "Chọn file",
    cancelBtn: "Huỷ",
    submitBtn: "Hoàn tất",
    resetBtn: "Reset",
    pleaseWait: "Vui lòng đợi...",
    successfully: "Thành công",
    error: "Lỗi",
    requiredField: "Đây là trường bắt buộc",
    confirmation: "Xác nhận",
    deleteWarning: "Bạn sẽ không thể khôi phục lại dữ liệu này",
    title: "Tiêu đề",
    parentPost: "Bài viết cha",
    postName: "Tên bài viết",
    postingTime: "Thời gian đăng bài",
    hotNews: "Tin nổi bật",
    no: "Không",
    yes: "Có",
    newsSection: "Chuyên mục tin",
    titleValidate: "Vui lòng nhập tiêu đề!",
    contentValidate: "Vui lòng nhập nội dung!",
    timePost: "Vui lòng nhập thời gian!",
    parentCategoryValidate: "Vui lòng nhập bài viết cha",
    dateReportVal: "Vui lòng nhập ngày báo cáo",
    vietnamese: "Tiếng Việt",
    english: "Tiếng Anh",
    korea: "Tiếng Hàn",
    addPageSuccessfully: "Thêm mới page thành công",
    editPage: "Chỉnh sửa page",
    editPageSuccessfully: "Cập nhật page thành công",
    editRoleSuccessfully: "Cập nhật vai trò thành công",
    addNewsSuccessfully: "Thêm mới tin tức thành công",
    editNews: "Chỉnh sửa tin tức",
    editNewsSuccessfully: "Cập nhật tin tức thành công",
    searchInput: "Nhập từ khóa cần tìm",
    searchFundName: "Nhập tên chứng chỉ quỹ",
    changeStatus: "Đổi trạng thái",
    changeRole: "Đổi vai trò",
    addCategory: "Thêm Category",
    category: "Danh mục",
    link: "Đường dẫn",
    addReport: "Thêm báo cáo",
    dateReport: "Ngày báo cáo",
    addNewsList: "Thêm tin tức mới",
    addUserList: "Thêm mới người dùng",
    editNewsList: "Sửa tin tức",
    newsDateTime: "Chọn ngày và giờ",
    reportDate: "Chọn ngày",
    addNewsCate: "Thêm danh mục tin tức",
    editNewsCate: "Sửa danh mục tin tức",
    addReportCate: "Thêm báo cáo",
    editReport: "Chỉnh sửa báo cáo",
    addReportSuccessfully: "Thêm mới báo cáo thành công",
    editReportSuccessfully: "Cập nhật báo cáo thành công",
    editReportCate: "Chỉnh sửa báo cáo",
    editBannerSuccessfully: "Cập nhật banner thành công",
    addUser: "Thêm người dùng",
    userName: "Tên đăng nhập",
    userPassword: "Mật khẩu",
    useNameValidate: "Tên đăng nhập không được để trống",
    passwordValidate: "Mật khẩu không được để trống",
    roleValidate: "Vai trò không được để trống",
    emailValidate: "Email không được để trống",
    emailValidateRule: "Email không đúng định dạng",
    all: "Tất cả",
    enable: "Hiện",
    disable: "Ẩn",
    discard: "Hủy bỏ",
    reset: "Đặt lại",
    sure: "Đồng ý",
    homeMenu: "Menu",
    setting: "Cài đặt",
    select: "Chọn menu",
    menuTopVi: "Menu đầu (VI)",
    menuTopEn: "Menu đầu (EN)",
    menuTopKr: "Menu đầu (KR)",
    menuBannerVi: "Menu banner (VI)",
    menuBannerEn: "Menu banner (EN)",
    menuBannerKr: "Menu banner (KR)",
    openAcc: "Mở tài khoản Online",
    menuVertical: "Menu dọc",
    value: "Giá trị",
    inputVal: "Nhập giá trị",
    numberItemPro: "Số lượng item trong 1 trang sản phẩm:",
    numberItemNews: "Số lượng item trong 1 trang tin tức:",
    colorAdmin: "Tone màu:",
    color: "Màu sắc",
    btnUpdate: "Cập nhật",
    btnUpdateNameMenu: "Cập nhật tên menu",
    inputColor: "Chọn màu sắc",
    blue: "Màu xanh",
    red: "Màu đỏ",
    yellow: "Màu vàng",
    purple: "Màu tím",
    green: "Màu xanh lá",
    black: "Màu đen",
    nameMenu: "Tên Menu",
    nameMenuValidate: "Tên menu",
    addMenuList: "Tạo mới menu",
    menuStructure: "Cấu trúc menu",
    collocation:
      "Sắp xếp item theo thứ tự bạn thích. Nhấp vào mũi tên bên phải mục để hiển thị thêm các tùy chọn cấu hình",
    customLink: "Tùy chỉnh liên kết",
    buy: "Mua",
    sell: "Bán",
    commandType: "Loại lệnh",
    pending: "Đang chờ xử lý",
    fail: "Thất bại",
    commandStatus: "Trạng thái lệnh",
    paymentStatus: "Trạng thái thanh toán",
    issuers: "Tổ chức phát hành",
    startDate: "Từ ngày",
    endDate: "Đến ngày",
    searchFundCode: "Tìm kiếm mã CCQ",
    searchTradingCode: "Tìm kiếm VSD trading code",
    searchNameCode: "Tìm kiếm tên",
    vsdTradingCode: "VSD trading code",
    date: "Ngày đặt lệnh",
    orderType: "Loại lệnh",
    fundCode: "Mã CCQ",
    fundName: "Tên CCQ",
    interestHole: "Lãi/Lỗ",
    amount: "Giá trị mua",
    quantity: "Số lượng",
    navShare: "Nav/Share",
    orderStatus: "Trạng thái lệnh",
    preBalance: "Pre-Balance",
    postBalance: "Post Balance",
    personalInformation: "Thông tin cá nhân",
    fullName: "Họ tên",
    accountType: "Loại hình TK",
    investorType: "Loại NĐT",
    nationality: "Quốc tịch",
    gender: "Giới tính",
    DateofBirth: "Ngày sinh",
    ownershipRegistration: "Số ĐKSH",
    typeRegistration: "Loại hình ĐKSH",
    dateRange: "Ngày cấp",
    issuedBy: "Nơi cấp",
    SĐT: "Số điện thoại",
    address: "Địa chỉ",
    type: "Thể loại",
    transactionDetails: "Xem chi tiết giao dịch",
    phoneNumber: "Số điện thoại",
    unitPrice: "Đơn giá",
    fee: "Phí",
    fundBalance: "Số dư CCQ",
    totalQuantity: "Tổng số lượng",
    blockQuantity: "Số lượng phong toả",
    availableQuantity: "Số lượng có sẵn",
  },
  en: {
    home: "Home",
    dashboard: "Dashboard",
    banner: "Banner",
    bannerManagement: "Banner Management",
    layoutBuilder: "Layout builder",
    craft: "Crafted",
    pages: "Pages",
    profile: "Profile",
    profileOverview: "Overview",
    projects: "Projects",
    campaigns: "Campaigns",
    documents: "Documents",
    connections: "Connections",
    wizards: "Wizards",
    horizontal: "Horizontal",
    vertical: "Vertical",
    account: "Account",
    accountOverview: "Overview",
    settings: "Settings",
    authentication: "Authentication",
    basicFlow: "Basic Flow",
    signIn: "Sign-in",
    signUp: "Sign-up",
    passwordReset: "Password Reset",
    multiStepSignUp: "Multi-steps Sign up",
    error404: "Error 404",
    error500: "Error 500",
    apps: "Apps",
    chat: "Chat",
    privateChat: "Private Chat",
    groupChat: "Group Chat",
    drawerChat: "Drawer Chat",
    widgets: "Widgets",
    widgetsLists: "Lists",
    widgetsStatistics: "Statistics",
    widgetsCharts: "Charts",
    widgetsMixed: "Mixed",
    widgetsTables: "Tables",
    widgetsFeeds: "Feeds",
    changelog: "Changelog",
    docsAndComponents: "Docs & Components",
    megaMenu: "Mega Menu",
    exampleLink: "Example link",
    modals: "Modals",
    general: "General",
    inviteFriends: "Invite Friends",
    viewUsers: "View Users",
    upgradePlan: "Upgrade Plan",
    shareAndEarn: "Share & Earn",
    forms: "Forms",
    newTarget: "New Target",
    newCard: "New Card",
    newAddress: "New Address",
    createAPIKey: "Create API Key",
    twoFactorAuth: "Two Factor Auth",
    createApp: "Create App",
    createAccount: "Create Account",
    documentation: "Documentation",
    components: "Components",
    resources: "Resources",
    activity: "Activity",
    customers: "Customers",
    gettingStarted: "Getting Started",
    customersListing: "Customers Listing",
    customerScoreListing: "Customers Score",
    customerDetails: "Customers Details",
    calendarApp: "Calendar",
    subscriptions: "Subscriptions",
    getStarted: "Getting Started",
    subscriptionList: "Subscription List",
    addSubscription: "Add Subscription",
    viewSubscription: "View Subscription",
    statistics: "Statistics",
    requestStatistics: "Request Statistics",
    pageManagement: "Page Management",
    pageList: "Page List",
    addPage: "Add Page",
    addReportCate: "Add Report",
    editReportCate: "Edit Report Category",
    news: "News",
    newsCategory: "News Category",
    newsList: "News List",
    addNews: "Add News",
    addUser: "Add Users",
    contact: "Contact",
    contactCategory: "Contact Category",
    contactList: "Contact List",
    addContact: "Add Contact",
    user: "User",
    fund: "Command list",
    fundInformation: "Fund Information",
    fundDeclaration: "Fund Declaration",
    userMgmt: "User Management",
    report: "Report",
    reportCategory: "Report Category",
    reportList: "Report List",
    addBtn: "Add",
    editBtn: "Edit",
    deleteBtn: "Delete",
    searchBtn: "Search",
    search: "Search",
    rearrange: "Rearrange",
    name: "Name",
    image: "Image",
    url: "URL",
    status: "Status",
    unitPrice: "Unit Price",
    action: "Action",
    index: "NO.",
    categoryName: "Category Name",
    postTime: "Post Time",
    reportTime: "Report Time",
    fullName: "Full Name",
    email: "Email",
    content: "Content",
    time: "Time",
    role: "Role",
    fileManager: "File Manager",
    addBanner: "Add banner",
    addBannerSuccessfully: "Add banner successfully",
    editBanner: "Edit banner",
    editBannerSuccessfully: "Edit banner successfully",
    publish: "Publish",
    chooseFile: "Choose file",
    cancelBtn: "Cancel",
    submitBtn: "Submit",
    resetBtn: "Reset",
    pleaseWait: "Please Wait...",
    successfully: "Success",
    error: "Error",
    requiredField: "This field is required",
    confirmation: "Confirmation",
    deleteWarning: "You will not be able to recover it",
    title: "Title",
    parentPost: "Parent Post",
    postName: "Post Name",
    postingTime: "Posting Time",
    hotNews: "Hot News",
    no: "No",
    yes: "Yes",
    newsSection: "News section",
    titleValidate: "Please enter a title!",
    contentValidate: "Please enter a content!",
    parentCategoryValidate: "Please enter a Parent Category",
    vietnamese: "Vietnamese",
    english: "English",
    korea: "Korea",
    addPageSuccessfully: "Add page successfully",
    editPage: "Edit page",
    editPageSuccessfully: "Update page successfully",
    editRoleSuccessfully: "Update role successfully",
    addNewsSuccessfully: "Add News successfully",
    editNews: "Edit News",
    editNewsSuccessfully: "Update News successfully",
    searchInput: "Enter your search term",
    searchFundName: "Enter search fund name",
    changeStatus: "Change status",
    changeRole: "Change role",
    addCategory: "Add Category",
    category: "Category",
    addReport: "Add Report",
    dateReport: "Day Report",
    addNewsList: "Add News List",
    addUserList: "Add User List",
    editNewsList: "Edit News List",
    addNewsCate: "Add News Category",
    editNewsCate: "Edit News Category",
    newsDateTime: "Select date and time",
    reportDate: "Select date",
    timePost: "Please input time!",
    addReportSuccessfully: "Add report successfully",
    editReportSuccessfully: "Update report successfully",
    editReport: "Edit report",
    dateReportVal: "Please input date!",
    userName: "User name",
    userPassword: "Password",
    useNameValidate: "Please input username",
    nameMenuValidate: "Name menu",
    passwordValidate: "Please input password",
    roleValidate: "Please input role",
    emailValidate: "Please input email",
    emailValidateRule: "Email invalidate",
    all: "All",
    enable: "Enable",
    disable: "Disable",
    discard: "Discard",
    reset: "Reset",
    sure: "Submit",
    homeMenu: "Menu",
    setting: "Setting",
    select: "Select menu",
    menuTopVi: "Menu top (VI)",
    menuTopEn: "Menu top (EN)",
    menuTopKr: "Menu top (KR)",
    menuBannerVi: "Menu banner (VI)",
    menuBannerEn: "Menu banner (EN)",
    menuBannerKr: "Menu banner (KR)",
    openAcc: "Open Account Online",
    menuVertical: "Vertical menu",
    value: "Value",
    numberItemPro: "Number of items per product page:",
    numberItemNews: "Number of news articles on one page:",
    colorAdmin: "Skin admin:",
    color: "Color",
    inputVal: "Input value",
    btnUpdate: "Update",
    btnUpdateNameMenu: "Update name menu",
    inputColor: "Input color",
    blue: "Blue",
    red: "Red",
    yellow: "Yellow",
    purple: "Purple",
    green: "Green",
    black: "Black",
    nameMenu: "Name Menu",
    addMenuList: "Create menu",
    menuStructure: "Menu structure",
    collocation:
      "Arrange items in the order you prefer. Click the right arrow next to the item to display additional configuration options",
    customLink: "Customize the link",
    buy: "Buy",
    sell: "Sell",
    commandType: "Command Type",
    pending: "Pending",
    fail: "Fail",
    commandStatus: "Command Status",
    paymentStatus: "Payment Status",
    issuers: "Issuers",
    startDate: "Start date",
    endDate: "End date",
    searchFundCode: "Search for fund code",
    searchTradingCode: "Search for VSD trading code",
    searchNameCode: "Search for name",
    to: "To",
    vsdTradingCode: "VSD trading code",
    date: "Command set date",
    orderType: "Order Type",
    fundCode: "Fund Code",
    fundName: "Fund Name",
    interestHole: "Interest/Hole",
    amount: "Amount",
    quantity: "Quantity",
    navShare: "Nav/Share",
    orderStatus: "Order Status",
    preBalance: "Pre-Balance",
    postBalance: "Post Balance",
    personalInformation: "Personal information",
    accountType: "Account Type",
    investorType: "Investor Type",
    nationality: "Nationality",
    gender: "Sex",
    DateofBirth: "Date of birth",
    ownershipRegistration: "Ownership registration number",
    typeRegistration: "Type of ownership registration",
    dateRange: "Date Range",
    issuedBy: "Issued by",
    phoneNumber: "Phone number",
    address: "Address",
    type: "Type",
    transactionDetails: "View transaction details",
    fee: "Fee",
    fundBalance: "Fund Certificate Balance",
    totalQuantity: "Total Quantity",
    blockQuantity: "Block Quantity",
    availableQuantity: "Available Quantity",
  },
  // es: {
  //   dashboard: "Tablero",
  //   banner: "Banner",
  //   bannerManagement: "Banner Manager",
  //   layoutBuilder: "Constructor de maquetación",
  //   craft: "Elaborado",
  //   pages: "Paginas",
  //   profile: "Perfil",
  //   profileOverview: "Descripción general",
  //   projects: "Proyectos",
  //   campaigns: "Campañas",
  //   documents: "Documentos",
  //   connections: "Conexiones",
  //   wizards: "Magos",
  //   horizontal: "Horizontal",
  //   vertical: "Vertical",
  //   account: "Cuenta",
  //   accountOverview: "Descripción general",
  //   settings: "Ajustes",
  //   authentication: "Autenticación",
  //   basicFlow: "Flujo básico",
  //   signIn: "Registrarse",
  //   signUp: "Inscribirse",
  //   passwordReset: "Restablecimiento de contraseña",
  //   multiStepSignUp: "Regístrese Multi-Pasos",
  //   error404: "Error 404",
  //   error500: "Error 500",
  //   apps: "Aplicaciones",
  //   chat: "Chat",
  //   privateChat: "Chat privado",
  //   groupChat: "Grupo de chat",
  //   drawerChat: "Chat del cajón",
  //   widgets: "Widgets",
  //   widgetsLists: "Liza",
  //   widgetsStatistics: "Estadísticas",
  //   widgetsCharts: "Gráficos",
  //   widgetsMixed: "Mezclada",
  //   widgetsTables: "Mesas",
  //   widgetsFeeds: "Alimenta",
  //   changelog: "Registro de cambios",
  //   docsAndComponents: "Documentos & Componentes",
  //   megaMenu: "Mega menú",
  //   exampleLink: "Enlace de ejemplo",
  //   modals: "Modales",
  //   general: "General",
  //   inviteFriends: "Invitar A Amigos",
  //   viewUsers: "Ver Usuarios",
  //   upgradePlan: "Plan De Actualización",
  //   shareAndEarn: "Compartir Y Ganar",
  //   forms: "Formas",
  //   newTarget: "Nuevo Objetivo",
  //   newCard: "Nueva Tarjeta",
  //   newAddress: "Nueva Direccion",
  //   createAPIKey: "Crea Clave De Api",
  //   twoFactorAuth: "Dos Factores",
  //   createApp: "Crear Aplicacion",
  //   createAccount: "Crear Una Cuenta",
  //   activity: "Actividad",
  //   documentation: "Documentación",
  //   components: "Componentes",
  //   resources: "Recursos",
  //   customers: "Clientes",
  //   gettingStarted: "Empezando",
  //   customersListing: "Listado De Clientes",
  //   customerScoreListing: "Customers Score",
  //   customerDetails: "Detalles De Los Clientes",
  //   calendarApp: "Calendario",
  //   subscriptions: "Suscripciones",
  //   getStarted: "Empezando",
  //   subscriptionList: "Lista De Suscripción",
  //   addSubscription: "Añadir Suscripción",
  //   viewSubscription: "Suscripción",
  //   statistics: "Statistics",
  //   requestStatistics: "Request Statistics",
  //   pageManagement: "Page Management",
  //   pageList: "Page List",
  //   addPage: "Add Page",
  //   news: "News",
  //   newsCategory: "News Category",
  //   newsList: "News List",
  //   addNews: "Add News",
  //   contact: "Contact",
  //   contactCategory: "Contact Category",
  //   contactList: "Contact List",
  //   addContact: "Add Contact",
  //   user: "User",
  //   userMgmt: "User Management",
  //   report: "Report",
  //   reportCategory: "Report Category",
  //   reportList: "Report List",
  // },
  // de: {
  //   dashboard: "Instrumententafel",
  //   layoutBuilder: "Layout-Builder",
  //   craft: "Hergestellt",
  //   pages: "Seiten",
  //   profile: "Profil",
  //   profileOverview: "Überblick",
  //   projects: "Projekte",
  //   campaigns: "Kampagnen",
  //   documents: "Unterlagen",
  //   connections: "Anschlüsse",
  //   wizards: "Zauberer",
  //   horizontal: "Horizontal",
  //   vertical: "Vertikal",
  //   account: "Konto",
  //   accountOverview: "Überblick",
  //   settings: "Die Einstellungen",
  //   authentication: "Authentifizierung",
  //   basicFlow: "Grundfluss",
  //   signIn: "Einloggen",
  //   signUp: "Anmelden",
  //   passwordReset: "Passwort zurücksetzen",
  //   multiStepSignUp: "Multi-Steps-Anmeldung",
  //   error404: "Fehler 404",
  //   error500: "Fehler 500",
  //   apps: "Apps",
  //   chat: "Plaudern",
  //   privateChat: "Private Chat",
  //   groupChat: "Privater Chat",
  //   drawerChat: "Gruppenchat Schubladen-Chat",
  //   widgets: "Widgets",
  //   widgetsLists: "Listen",
  //   widgetsStatistics: "Statistiken",
  //   widgetsCharts: "Diagramme",
  //   widgetsMixed: "Gemischt",
  //   widgetsTables: "Tabellen",
  //   widgetsFeeds: "Einspeisungen",
  //   changelog: "Änderungsprotokoll",
  //   docsAndComponents: "Dokumente & Komponenten",
  //   megaMenu: "Mega-Menü",
  //   exampleLink: "Beispiellink",
  //   modals: "Modale",
  //   general: "Allgemeines",
  //   inviteFriends: "Freunde Einladen",
  //   viewUsers: "Benutzer Anzeigen.",
  //   upgradePlan: "Upgrade-Plan",
  //   shareAndEarn: "Teilen & Verdienen",
  //   forms: "Formen",
  //   newTarget: "Neues Ziel",
  //   newCard: "Neue Karte",
  //   newAddress: "Neue Adresse",
  //   createAPIKey: "Api-Key Erstellen",
  //   twoFactorAuth: "Zwei Faktor Auth.",
  //   createApp: "App Erstellen",
  //   createAccount: "Benutzerkonto Erstellen",
  //   activity: "Aktivität",
  //   documentation: "Dokumentation",
  //   components: "Bauteile",
  //   resources: "Ressourcen",
  //   customers: "Kunden",
  //   gettingStarted: "Einstieg",
  //   customersListing: "Kundenauflistung",
  //   customerScoreListing: "Customers Score",
  //   customerDetails: "Kundenangaben",
  //   calendarApp: "Kalender",
  //   subscriptions: "Abonnements",
  //   getStarted: "Einstieg",
  //   subscriptionList: "Abonnementliste",
  //   addSubscription: "Subskription Hinzufügen.",
  //   viewSubscription: "Abonnement Anzeigen.",
  //   statistics: "Statistics",
  //   requestStatistics: "Request Statistics",
  //   pageManagement: "Page Management",
  //   pageList: "Page List",
  //   addPage: "Add Page",
  //   news: "News",
  //   newsCategory: "News Category",
  //   newsList: "News List",
  //   addNews: "Add News",
  //   contact: "Contact",
  //   contactCategory: "Contact Category",
  //   contactList: "Contact List",
  //   addContact: "Add Contact",
  //   user: "User",
  //   userMgmt: "User Management",
  //   report: "Report",
  //   reportCategory: "Report Category",
  //   reportList: "Report List",
  // },
  // ja: {
  //   dashboard: "ダッシュボード",
  //   layoutBuilder: "レイアウトビルダー",
  //   craft: "作成された",
  //   pages: "ページ",
  //   profile: "プロフィール",
  //   profileOverview: "概要",
  //   projects: "プロジェクト",
  //   campaigns: "キャンペーン",
  //   documents: "書類",
  //   connections: "接続",
  //   wizards: "ウィザード",
  //   horizontal: "横",
  //   vertical: "垂直",
  //   account: "アカウント",
  //   accountOverview: "概要",
  //   settings: "設定",
  //   authentication: "認証",
  //   basicFlow: "基本的な流れ",
  //   signIn: "サインイン",
  //   signUp: "サインアップ",
  //   passwordReset: "パスワードのリセット",
  //   multiStepSignUp: "マルチステップサインアップ",
  //   error404: "エラー404",
  //   error500: "エラー 500",
  //   apps: "アプリ",
  //   chat: "チャット",
  //   privateChat: "プライベートチャット",
  //   groupChat: "グループチャット",
  //   drawerChat: "ドロワーチャット",
  //   widgets: "ウィジェット",
  //   widgetsLists: "リスト",
  //   widgetsStatistics: "統計",
  //   widgetsCharts: "チャート",
  //   widgetsMixed: "混合",
  //   widgetsTables: "テーブル",
  //   widgetsFeeds: "フィード",
  //   changelog: "変更ログ",
  //   docsAndComponents: "ドキュメントとコンポーネント",
  //   megaMenu: "メガメニュー",
  //   exampleLink: "リンク例",
  //   modals: "モーダルズ",
  //   general: "一般",
  //   inviteFriends: "友達を招待",
  //   viewUsers: "ユーザーを表示します",
  //   upgradePlan: "アップグレードプラン",
  //   shareAndEarn: "シェア＆稼働",
  //   forms: "フォーム",
  //   newTarget: "新しいターゲット",
  //   newCard: "新しいカード",
  //   newAddress: "新しいアドレス",
  //   createAPIKey: "Apiキーを作成します",
  //   twoFactorAuth: "2つの要因Auth",
  //   createApp: "アプリを作成します",
  //   createAccount: "アカウントを作成する",
  //   activity: "アクティビティ",
  //   documentation: "ドキュメンテーション",
  //   components: "コンポーネント",
  //   resources: "資力",
  //   customers: "お客様のお客様",
  //   gettingStarted: "入門",
  //   customersListing: "顧客のリスト",
  //   customerScoreListing: "Customers Score",
  //   customerDetails: "お客様の詳細",
  //   calendarApp: "カレンダー",
  //   subscriptions: "購読",
  //   getStarted: "入門",
  //   subscriptionList: "サブスクリプションリスト",
  //   addSubscription: "サブスクリプションを追加します",
  //   viewSubscription: "購読を見る",
  //   statistics: "Statistics",
  //   requestStatistics: "Request Statistics",
  //   pageManagement: "Page Management",
  //   pageList: "Page List",
  //   addPage: "Add Page",
  //   news: "News",
  //   newsCategory: "News Category",
  //   newsList: "News List",
  //   addNews: "Add News",
  //   contact: "Contact",
  //   contactCategory: "Contact Category",
  //   contactList: "Contact List",
  //   addContact: "Add Contact",
  //   user: "User",
  //   userMgmt: "User Management",
  //   report: "Report",
  //   reportCategory: "Report Category",
  //   reportList: "Report List",
  // },
  // fr: {
  //   dashboard: "Générateur de mise",
  //   layoutBuilder: "En page",
  //   craft: "Fabriqué",
  //   pages: "Pages",
  //   profile: "Profil",
  //   profileOverview: "Aperçu",
  //   projects: "Projets",
  //   campaigns: "Campagnes",
  //   documents: "Documents",
  //   connections: "Connexions",
  //   wizards: "Sorciers",
  //   horizontal: "Horizontal",
  //   vertical: "Verticale",
  //   account: "Compte",
  //   accountOverview: "Aperçu",
  //   settings: "Paramètres",
  //   authentication: "Authentification",
  //   basicFlow: "Flux de base",
  //   signIn: "SS'identifier",
  //   signUp: "Inscrivez-vous",
  //   passwordReset: "Réinitialisation du mot de passe",
  //   multiStepSignUp: "S'Inscrire Multi-Étapes",
  //   error404: "Erreur 404",
  //   error500: "Erreur 500",
  //   apps: "Applications",
  //   chat: "Discuter",
  //   privateChat: "Discussion privée",
  //   groupChat: "Discussion de groupe",
  //   drawerChat: "Chat de tiroir",
  //   widgets: "Widgets",
  //   widgetsLists: "Listes",
  //   widgetsStatistics: "Statistiques",
  //   widgetsCharts: "Graphiques",
  //   widgetsMixed: "Mixte",
  //   widgetsTables: "Les tables",
  //   widgetsFeeds: "Flux",
  //   changelog: "Journal des modifications",
  //   docsAndComponents: "Documents & composants",
  //   megaMenu: "Méga Menu",
  //   exampleLink: "Exemple de lien",
  //   modals: "Modals",
  //   general: "Général",
  //   inviteFriends: "Inviter Des Amis",
  //   viewUsers: "Voir Les Utilisateurs",
  //   upgradePlan: "Plan De Mise À Niveau",
  //   shareAndEarn: "Partager Et Gagner",
  //   forms: "Formes",
  //   newTarget: "Nouvelle Cible",
  //   newCard: "Nouvelle Carte",
  //   newAddress: "Nouvelle Adresse",
  //   createAPIKey: "Créer Une Touche Api",
  //   twoFactorAuth: "Deux Facteurs D'Authentification",
  //   createApp: "Créer Une Application",
  //   createAccount: "Créer Un Compte",
  //   activity: "Activité",
  //   documentation: "Documentation",
  //   components: "Composants",
  //   resources: "Ressources",
  //   customers: "Les Clients",
  //   gettingStarted: "Commencer",
  //   customersListing: "Liste Des Clients",
  //   customerScoreListing: "Customers Score",
  //   customerDetails: "Détails Des Clients",
  //   calendarApp: "Calendrier",
  //   subscriptions: "Abonnements",
  //   getStarted: "Commencer",
  //   subscriptionList: "Liste D'Abonnement",
  //   addSubscription: "Ajouter Un Abonnement",
  //   viewSubscription: "Voir L'Abonnement",
  //   statistics: "Statistics",
  //   requestStatistics: "Request Statistics",
  //   pageManagement: "Page Management",
  //   pageList: "Page List",
  //   addPage: "Add Page",
  //   news: "News",
  //   newsCategory: "News Category",
  //   newsList: "News List",
  //   addNews: "Add News",
  //   contact: "Contact",
  //   contactCategory: "Contact Category",
  //   contactList: "Contact List",
  //   addContact: "Add Contact",
  //   user: "User",
  //   userMgmt: "User Management",
  //   report: "Report",
  //   reportCategory: "Report Category",
  //   reportList: "Report List",
  // },
};

const i18n = createI18n({
  legacy: false,
  locale: "vi",
  globalInjection: true,
  messages,
});

export default i18n;

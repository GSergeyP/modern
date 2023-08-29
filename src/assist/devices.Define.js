const DevicesDefine = () => { 
  //Разрешение экрана 
const screenResolutionMobile = 320,
      screenResolutionTablet = 768,
      screenResolutionHD = 1440,
      windowInnerWidth = window.innerWidth;
      
  if(windowInnerWidth <= screenResolutionTablet - 1) return 'Mobile'
  else if(windowInnerWidth >= screenResolutionTablet && windowInnerWidth <= screenResolutionHD - 1) return 'Tablet'
  else if(windowInnerWidth >= screenResolutionHD) return 'Hd'
}

export default DevicesDefine;


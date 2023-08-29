const Icons = (attribute, icon) => {
  return(
    `<svg class="${attribute}">`+
      `<use xlink:href=\"./svg/sprite.svg#${icon}\"></use>`+
    `</svg>`
  )
}   

export default Icons;
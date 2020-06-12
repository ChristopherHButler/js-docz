
export default {
  title: 'js-docz',
  description: 'This is a set of interactive JavaScript summary notes.',
  src: './',
  ignore: ['README.md', 'changelog.md', 'code_of_conduct.md', 'contributing.md', 'license.md'],
  typescript: true,
  themeConfig: {
    styles: { 
      Container: { 
        gridTemplateColumns: '1fr 3fr',
      } 
    } 
  },
}

// themeConfig: { 
//   colors: { 
//     primary: "#7367f0", 
//     text: "#626262", 
//     link: "#7367f0", 
//     header: { 
//       bg: "#7367f0", 
//       text: "#FFFFFF" 
//     }, 
//     sidebar: { 
//       navLinkActive: "#7367f0" 
//     } 
//   }, 
//   fonts: { 
//     body: 
//     "Montserrat", 
//     heading: 
//     "Montserrat", 
//     monospace: "Montserrat" 
//   }, 
//   styles: { 
//     p: { fontSize: 15 }, 
//     Container: { maxWidth: "100%" } 
//   } 
// }
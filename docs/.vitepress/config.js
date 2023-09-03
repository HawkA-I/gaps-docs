module.exports = {
    title:"GAPS Project Documentation",
    themeConfig:{
        logo:"https://gaps.hawkai.online/GAPS_JAPAN.png",
        siteTitle:"GAPS Technical Documentation",
        nav:[
            {text:'Home',link:'/src/index.md'},
            {text:'Dashboard',link:'/'},
            {text:'Student',link:'/'},
        ],
        sidebar: [
            {
                text:"Get Started",
                items:[
                    {text:"Introdcution",link:'/src/introduction'}
                ]
            },
            {
              text: "Student",
              collapsible: true,
              items: [
                { text: "Student Group", link: "/src/studentgroup" },
                { text: "Proficiency Test", link: "/src//proficiency" },
              ],
            },
            {
              text: "University",
              collapsible: false,
              items: [
                { text: "Adding University", link: "src/university" },
                { text: "Assign Student to University", link: "src/adduniversisty" },
              ],
            },
          
          ],
    }
}
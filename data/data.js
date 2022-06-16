export const projectInfo = {
    name:"Bishop Manogue CHS",
    type: "",
    frames: "",
}

export const projectTypes = [
    {
        display: 'Professional',
        key: 'pro'
    },
    {
        display: 'Professional Plus',
        key: 'plus'
    },
    {
        display: 'Professional Premium',
        key: 'premium'
    },
]

export const tocItemInfo = [
    {
        id: 1,
        title: "Homepage and Hover/On States",
        frameStart: "1",
        frameEnd: "3",
        description: "BMCHS's new homepage features a clean and modern aesthetic and is showcased on these first few slides.",

    },
    {
        id: 2,
        title: "Sample Layout Pages",
        frameStart: "4",
        frameEnd: "6",
        description: "A site is much more than just its homepage. Showcased on these slides are some example interior pages utilizing dummy content to give a rough idea of how the rest of the site will come together with this new design",

    },
/*     {
        id: 3,
        title: "Frame Group 3",
        frameStart: "6",
        frameEnd: "8",
        description: "Some Text to describe the content of the specified frames",

    }, */
]

export const projectFrames = [
    {
        id:1,
        img:"/images/hp1.jpg",
        height:"4372px",
        width: "1600px",
        title: "Bishop Manogue's New Homepage",
        frameGroup:1,
        navGraphic: true,
        navGraphicToChange: true,
        description: "<p>Welcome to Bishop Manogue's New Website!. What's on show here across the presentation is an effort to bring together various different design aesthetics, from existing brand material, the sites that were listed as references, as well as notes from the first session. Ideally all of this combined into a clean, modern aesthetic that vastly improves the current site design and experience.</p><p>The flow of the homepage is logical, opening like most with a large hero section with tagline text that invites the visitor to continue scrolling. From there we have an introduction section paired with one of the provided illustrations. This sits just above three large image links that, while currently are set up to point to Admissions, Academics, and Student Life, they can indeed point anywhere deemed fit. Statistics follows, pulling in existing numbers on the School Profile PDF, it's framed nicely with another illustration behind them.<p>We then segue into an events section, utilizing calendar events to show off what's happening currently at the school. Below this is another chance to feature content with a rotating single item carousel, once again framed nicely with the last illustration. The page itself is rounded out by three call to action image links along with a fairly standard footer</p>",
    },
    {
        id:2,
        img:"/images/hp2.jpg",
        height:"4372px",
        width: "1600px",
        title: "Homepage Hover/On States",
        frameGroup:1,
        navGraphic: true,
        navGraphicToChange: true,
        description:"<p>With this being a fairly static mock up presentation, it can be difficult to preview all of the different interactivity and microinteractions that the design will have. The plan is to have each of the elements on the HP transition in very similar to the referenced Lake Highland Prep, or other blackbaud schools with that feature applied. Showcased here on this slide we simply see how the large image links and buttons will appear when they are engaged with.</p>",
    },
    {
        id:3,
        img:"/images/hp3.jpg",
        height:"900px",
        width: "1600px",
        title: "Main and Utility Nav Preview",
        frameGroup:1,
        navGraphic: false,
        navGraphicToChange: true,
        description:"<p>Shown here are the site's two navigations, one for the main nav and the other a more utility nav. The main nav is composed of a simple drop down, clean and effective without any major fuss, it should quickly let visitors navigate the site without overwhelming them.</p><p>The other navigation has been set up like a utility panel and is meant for the current community members. In there they will find all of the links to the various portal logins, as well as any helpful public pages like the school calendar, or main news page. Search is also tucked in there. This both consolidates all of these more community focused resources into one place, as well makes it a bit easier to retrain said community on where to go on the site.</p>",
    },
    {
        id:4,
        img:"/images/lp.jpg",
        height:"2750px",
        width: "1600px",
        title: "Sample Layout: Landing Page",
        frameGroup:2,
        navGraphic: true,
        navGraphicToChange: true,
        description:`<p>A school website is more than just the homepage, and as such this presentation includes three different sample interior layouts to preview. Each of these vary in scope and content (though they all use placeholder content), but they are all meant to showcase how interior pages can look with this new site design.</p><p>The first of these layouts has been dubbed "Landing Page" for it's overall scope of cotnent and somewhat centered layout that would do well as an introduction page to a section.</p>`,
    },
    {
        id:5,
        img:"/images/wlsr.jpg",
        height:"2165px",
        width: "1600px",
        title: "Sample Layout: Wide Left, Skinny Right",
        frameGroup:2,
        navGraphic: true,
        navGraphicToChange: true,
        description:`<p>A school website is more than just the homepage, and as such this presentation includes three different sample interior layouts to preview. Each of these vary in scope and content (though they all use placeholder content), but they are all meant to showcase how interior pages can look with this new site design.</p><p>The second layout is aptly named the "Wide Left, Skinny Right" layout and is by far one of the most common layout schemes across websites. Great for pages whose content, while important, doesn't need to be as engaging as a landing page or other pages.</p>`,
    },
    {
        id:6,
        img:"/images/mr.jpg",
        height:"2509px",
        width: "1600px",
        title: "Sample Layout: Mixed Row",
        frameGroup:3,
        navGraphic: true,
        navGraphicToChange: true,
        description:`<p>A school website is more than just the homepage, and as such this presentation includes three different sample interior layouts to preview. Each of these vary in scope and content (though they all use placeholder content), but they are all meant to showcase how interior pages can look with this new site design.</p><p>The last of the provided samples, the "Mixed Row Layout" showcases the flexibilty you'll have with the design. While a landing page isn't right for every page, and a simple layout might not do more engaging content justice, something in the middle might serve a page better.</p><p>Also, immediately apparent here is the lack of a page banner. We understand that sometimes, finding the right or relevant page banner for every single page can be difficult. This type of page "banner" region is another solution for pages that don't actually need a banner, like forms, or deeper sub pages. You may not use this banner design a lot, but it's there for when you need it.</p>`,
    },
/*     {
        id:7,
        img:"/images/bs.jpg",
        height:"5001px",
        width: "1600px",
        title: "Frame 7",
        frameGroup:3,
        navGraphic: true,
        navGraphicToChange: true,
        description:"<p>Nam sed quam gravida odio blandit elementum eget eu leo. Cras ut erat in ipsum aliquet gravida sit amet blandit velit. Proin imperdiet facilisis lacus, nec convallis arcu aliquam fringilla. Nulla vitae velit maximus orci ultricies pretium. Nam ornare aliquam nisl mattis iaculis. Ut sollicitudin mi a diam luctus, a fringilla tortor efficitur. Sed faucibus felis risus, vel hendrerit augue feugiat consectetur. Praesent feugiat placerat tellus sit amet fermentum. Donec sit amet leo in urna gravida facilisis. Quisque a bibendum erat.</p>",
    },
    {
        id:8,
        img:"/images/ss.jpg",
        height:"3295px",
        width: "1600px",
        title: "Frame 8",
        frameGroup:3,
        navGraphic: true,
        navGraphicToChange: false,
        description:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet mollis tellus, eu egestas magna. Integer semper orci est, nec molestie neque consectetur sed. Phasellus lorem est, placerat vel diam non, pretium ornare ex. Maecenas consectetur euismod nulla, vitae placerat magna congue a. Ut libero ipsum, mollis sed ipsum ac, feugiat dictum quam. Donec tellus libero, pharetra viverra ullamcorper non, placerat et felis.</p><p>Ut placerat elementum eros, eget pharetra ipsum lobortis id. Nunc ac mollis lorem, tempus euismod orci. Aenean auctor dolor a est congue mollis. Duis elit arcu, dapibus vel congue sed, vehicula ut lectus. In sollicitudin elit vel nibh fringilla, a imperdiet nibh bibendum. Praesent non risus lacinia, vehicula risus id, elementum lectus. Etiam lacinia sapien quis leo tincidunt, ultricies feugiat sapien varius.</p><p>Nam sed quam gravida odio blandit elementum eget eu leo. Cras ut erat in ipsum aliquet gravida sit amet blandit velit. Proin imperdiet facilisis lacus, nec convallis arcu aliquam fringilla. Nulla vitae velit maximus orci ultricies pretium. Nam ornare aliquam nisl mattis iaculis. Ut sollicitudin mi a diam luctus, a fringilla tortor efficitur. Sed faucibus felis risus, vel hendrerit augue feugiat consectetur. Praesent feugiat placerat tellus sit amet fermentum. Donec sit amet leo in urna gravida facilisis. Quisque a bibendum erat.</p>",
    } */
]

export const fixedNavGraphic = {
    initial:{
        img:"/images/navBar.png",
        width:"1600px",
        height:"104px",
    },
    scrolled: {
        img:"/images/navBarSolid.png",
        width:"1600px",
        height:"104px",
    }
}

projectInfo.type = projectTypes[0].display;
projectInfo.frames= projectFrames.length;
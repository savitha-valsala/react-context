import Accordion from "..//Accordion";
function AccordionPage(){

  const items =[
          {
            id : 1,
            label:"Can I implement dynamic pages by using react",
            content:"Yes , You can make it as better as you imagine .Yes , You can make it as better as you imagine ."
        },
        {
          id : 2,
          label:"Can I implement dynamic pages by using JS",
          content:"Yes , You can make it as better as you imagine .Yes , You can make it as better as you imagine ."
      },
      {
        id : 3,
        label:"Can I implement dynamic pages by using CS",
        content:"Yes , You can make it as better as you imagine.Yes , You can make it as better as you imagine ."
      }
];

  return(
    <Accordion items={items} />
  )

};
export default AccordionPage;


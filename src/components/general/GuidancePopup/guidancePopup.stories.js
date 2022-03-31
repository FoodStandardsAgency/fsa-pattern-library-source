import guidancePopup from './guidancePopup.html.twig';
import './guidancePopup.js';

export default {
  title: 'Components/General/Guidance Popup',
};

const Template = (args) => guidancePopup(args);

export const GuidancePopup = Template.bind({});
GuidancePopup.args = {
  label: 'Help',
  more_link: '#',
  more_text: 'More help topics',
  content: `<h3>Preparatory Stage A: Prerequisite food hygiene requirements</h3>
    <p>"Prerequisites" are basic hygiene measures that should be in place in your food business prior to you undertaking a HACCP study. They include matters such as supplier approval, incoming material specifications, finished product specifications and staff training.
    The MyHACCP tool shows you a list of common prerequisites and asks you to select the ones you have properly considered and for which you have put in place adequate controls. You will then be invited to identify the location of documents such as policies and procedures where further details of these prerequisite controls may be found. It is common for food businesses to place all these documents into a “prerequisite manual” for ease of reference, but this is not a requirement. 
    The list of prerequisites in MyHACCP is not exhaustive and there may be other matters, such as temperature control, which are relevant for your business.
    Once you have identified which prerequisites are relevant to your business, you should develop procedures, or review existing documentation, to ensure that adequate control measures are in place.
    For each prerequisite you may wish to include the following points in your procedure.
    Top tip: Use the list of common prerequisites in MyHACCP as a checklist to ensure that you have properly considered all the relevant hygiene measures that should be in place before you start your HACCP study.
    Read about the general requirements for each prerequisite listed in the MyHACCP Web Tool.</p>
    <h3>Operational Prerequisites</h3>
    <p>Most prerequisites are general in nature and their purpose is to ensure the Sed a</p>`,
};

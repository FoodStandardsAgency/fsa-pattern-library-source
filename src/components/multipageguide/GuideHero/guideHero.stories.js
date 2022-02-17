import articleHero from '/src/components/article/ArticleHero/articleHero.html.twig';
import '/src/components/article/ArticleHero/articleHero.scss';
import './guideHero.scss';

export default {
  title: 'Components/Multipage Guide/Guide Hero',
};

const Template = (args) => articleHero(args);

export const GuideHero = Template.bind({});
GuideHero.args = {
  type: 'guide',
  region: ['England', 'Northern Ireland', 'Wales'],
  type_string: 'FSA Board & Business Committee Meetings - September 2021',
  title: 'FSA Board Meeting - September 2021: Agenda and Papers',
  description: 'Agenda and papers for The FSA Board meeting on 15 September 2021 at etc.venues -133 Houndsditch, Liverpool Street, London EC3A 7B',
  last_updated_string: 'Last updated',
  last_updated_date: '29 October 2021',
  specific: 'specific',
  pdf_link: '#',
  pdf_name: '',
  view: 'View',
  as: 'as',
  pdf: 'PDF',
  new_window: 'Opens in a new window',
  print_this_page: 'Print this page',
};
import Icon, { IconComponentProps } from '@ant-design/icons/es/components/Icon'
import React from 'react'

const CompassSvg = () => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm1.476 14.955c.988-.405 1.757-1.211 2.116-2.216l2.408-6.739-6.672 2.387c-1.006.36-1.811 1.131-2.216 2.119l-3.065 7.494 7.429-3.045zm-.122-4.286c.551.551.551 1.446 0 1.996-.551.551-1.445.551-1.996 0-.551-.55-.551-1.445 0-1.996.551-.551 1.445-.551 1.996 0z" /></svg>
)

const CalendarWithStopperSvg = () => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 10.174v-2.174h3v2.174c.689.163 1.335.436 1.92.799l.816-.973 1.532 1.286-.83.989c.974 1.137 1.562 2.613 1.562 4.225 0 3.587-2.913 6.5-6.5 6.5s-6.5-2.913-6.5-6.5c0-3.071 2.135-5.648 5-6.326zm7-9.174v7h-2v-2h-19v15h8.289c.472.754 1.059 1.429 1.736 2h-12.025v-22h23zm-5.5 11c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm2.368 1.49l-2.076 1.562c-.503-.103-1.045.051-1.413.461-.548.615-.496 1.558.119 2.107.614.55 1.558.497 2.107-.117.367-.412.459-.967.3-1.456l1.303-2.255-.34-.302z" /></svg>
)

const OnlineSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 1h-20v14h20v-14zm-2 12h-16v-10h16v10zm2 3h-20l-2 7h24l-2-7zm-12.228 6l.466-2h3.524l.466 2h-4.456z"/></svg>
)

const LocationSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z"/></svg>
)

const DonationSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.728 20.517c-3.488 0-5.613-2.461-6.443-5.517h6.715l.333-2h-7.398c-.059-.664-.064-1.335-.014-2h7.746l.333-2h-7.755c.786-3.106 2.855-5.626 6.154-5.626 1.133 0 2.391.203 3.836.62l.765-3.162c-1.854-.552-3.616-.832-5.244-.832-5.959 0-9.541 4.152-10.594 9h-2.162l-.333 2h2.203c-.049.666-.051 1.334-.007 2h-2.53l-.333 2h3.145c1.033 4.848 4.664 9 11.085 9 1.5 0 3.004-.276 4.476-.821l-.883-3.23c-1.048.378-2.088.568-3.095.568z"/></svg>
)

const WheelbarrowSvg = () => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M17.012 18.708l-4.318-1.07-3.981 3.871c-.326.317-.755.491-1.209.491-.85 0-1.504-.691-1.504-1.502v-4.519l-4.13-8.979h-1.37c-.311 0-.5-.26-.5-.5 0-.239.189-.5.5-.5h2.025l4.194 9.132 10.38 2.569c.363-1.544 1.75-2.695 3.404-2.695 1.93 0 3.497 1.567 3.497 3.497s-1.567 3.497-3.497 3.497c-1.861 0-3.385-1.457-3.491-3.292zm3.488-2.708c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm-13.5.227v4.271c0 .48.612.688 1.017.294l3.534-3.437-4.551-1.128zm13.503 1.276c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-13.503-12.503h3v-3h5.999v3h3.001v3.003h3c-.005.008-3.399 4.952-4.968 7.235-.522.762-1.41.983-2.113.814l-6.592-1.57c-.6-.143-1.1-.554-1.355-1.115-.79-1.725-2.455-5.367-2.455-5.367l2.483.001v-3.001zm9.208 9.673c-.203.296-.599.512-1.057.406l-6.593-1.57c-.301-.072-.548-.274-.678-.558l-1.806-3.951 14.027.002-3.893 5.671zm-3.208-6.673v-2h-5v2h5zm5 0v-2h-4v2h4zm-3.001-3v-2h-3.999v2h3.999z"/></svg>
)

const CogwheelHeadSvg = () => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.517 24h-11.646c.522-3.035.897-6.162-.422-8.028-1.666-2.357-2.43-4.742-2.449-6.883-.045-5.19 4.231-9.114 10.203-9.089 7.236.03 9.328 6.156 9.773 7.943.34 1.369-.898 1.869-.166 2.702.596.679 1.035 1.364 1.789 2.177.292.315.405.646.401.943-.006.434-.291.798-.748.958-.429.15-.76.32-1.215.443-.145 1.16-.521 2.572-.798 3.557-.737 2.62-2.896 1.059-3.881 2.607-.426.668-.64 1.738-.841 2.67zm-3.844-19h-1.346c-.243.681-.312 1.122-.842 1.341-.53.22-.888-.041-1.545-.353l-.952.952c.311.654.573 1.015.353 1.545-.219.53-.66.599-1.341.841v1.347c.68.242 1.122.312 1.341.842.222.534-.047.902-.353 1.544l.952.952c.652-.309 1.015-.573 1.545-.353v.001c.529.219.599.657.842 1.341h1.346c.243-.682.313-1.121.845-1.343h.001c.526-.219.883.042 1.541.354l.952-.952c-.31-.651-.573-1.014-.354-1.544.219-.529.662-.6 1.342-.842v-1.347c-.688-.244-1.123-.313-1.341-.841-.22-.53.041-.89.353-1.545l-.952-.952c-.651.31-1.014.573-1.545.353-.529-.219-.598-.657-.842-1.341zm-.673 6.667c-.92 0-1.667-.747-1.667-1.667 0-.921.747-1.667 1.667-1.667s1.667.746 1.667 1.667c0 .92-.747 1.667-1.667 1.667z"/></svg>
)

const StartPlusSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.397 17.899l1.019 6.101-7.416-4.554-7.416 4.554 1.48-8.866-6.064-5.828 8.332-1.15 3.668-8.156 3.047 6.773c-1.258 1.186-2.047 2.863-2.047 4.727 0 3.213 2.334 5.875 5.397 6.399zm5.603-6.399c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v1.999l-2 .001v1h2v2h1v-2h2v-1z"/></svg>
)

export const CompassIcon: React.FC<IconComponentProps> = props => <Icon component={CompassSvg} {...props} />
export const CalendarWithStopperIcon: React.FC<IconComponentProps> = props => <Icon component={CalendarWithStopperSvg} {...props} />
export const OnlineIcon: React.FC<IconComponentProps> = props => <Icon component={OnlineSvg} {...props} />
export const LocationIcon: React.FC<IconComponentProps> = props => <Icon component={LocationSvg} {...props} />
export const DonationIcon: React.FC<IconComponentProps> = props => <Icon component={DonationSvg} {...props} />
export const WheelbarrowIcon: React.FC<IconComponentProps> = props => <Icon component={WheelbarrowSvg} {...props} />
export const CogwheelHeadIcon: React.FC<IconComponentProps> = props => <Icon component={CogwheelHeadSvg} {...props} />
export const StartPlusIcon: React.FC<IconComponentProps> = props => <Icon component={StartPlusSvg} {...props} />

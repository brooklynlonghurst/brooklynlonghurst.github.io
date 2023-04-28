import { annotate, annotationGroup } from 'rough-notation';

const a1 = annotate(document.getElementById('developer'), { type: 'highlight', color: rgb(244, 214, 244) });
const a2 = annotate(document.getElementById('react'), { type: 'highlight', color: rgb(244, 214, 244) });
const a3 = annotate(document.getElementById('javascript'), { type: 'highlight', color: lightyellow });
const a4 = annotate(document.getElementById('css'), { type: 'highlight', color: lightblue });


const ag = annotationGroup([a1, a2, a3, a4]);
ag.show();
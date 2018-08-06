import { table, tr, td } from './tags';


export default function buildHtml(){
  return table(
    tr(td('lang'), td('comment')),
    tr(td('php'), td('statements')),
    tr(td('clojure'), td('expressions'))
  );
}

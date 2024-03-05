import getActualHighlightSearch from './getActualHighlightSearch';
export default function isSearchMatch(src, props) {
    // const actualHighlightSearch = highlightSearch.substring(highlightSearch.lastIndexOf('.') + 1);
    // const parentValue = highlightSearch.substring(0, highlightSearch.lastIndexOf('.'));
    // let highlightSearchMatched = false;
    // if (parentValue) {
    //     if (highlightSearch === namespace.join(".")) {
    //         highlightSearchMatched = true;
    //     }
    // } else if (display_name === lastHighlightSearch) {
    //     highlightSearchMatched = true;
    // }
    // let actualSearch, isSearchMatched;
    // const highlightSearch = "false." + props.highlightSearch.replace(/[\[\]']+/g,'.').replace(/\.{1,}/g, '.');;
    // const namespaces = props.namespace.join(".").toLowerCase();
    // // if (props.highlightSearch.lastIndexOf('.') > -1) {
    //     actualSearch = getActualHighlightSearch(highlightSearch);
    //     const parentValue = highlightSearch.substring(0, highlightSearch.lastIndexOf('.'));
    //     isSearchMatched = highlightSearch && JSON.stringify(src).toLowerCase().includes(actualSearch) && (parentValue.toLowerCase() === namespaces || highlightSearch.toLowerCase() === namespaces);
    //     // console.log(props);
    // } else {
    //     actualSearch = props.highlightSearch;
    //     isSearchMatched = props.highlightSearch && JSON.stringify(src).toLowerCase().includes(actualSearch) && props.namespace.length === 1;
    // }

    // actualSearch = getActualHighlightSearch(props.highlightSearch);
    // isSearchMatched = props.highlightSearch && JSON.stringify(src).toLowerCase().includes(actualSearch);

    // if (isSearchMatched) {
    //     console.log(props);
    // }

    const highlightSearch = "false." + props.highlightSearch.replace(/[\[\]']+/g,'.').replace(/\.{1,}/g, '.');;
    const namespaces = props.namespace.join(".").toLowerCase();
    const actualSearch = getActualHighlightSearch(highlightSearch);
    const parentValue = highlightSearch.substring(0, highlightSearch.lastIndexOf('.'));
    const isSearchMatched = highlightSearch 
        && src.toLowerCase() === actualSearch
        && (parentValue.toLowerCase() === namespaces || highlightSearch.toLowerCase() === namespaces);

    if (isSearchMatched) {
        // console.log(src.toLowerCase() + " => " + highlightSearch + " => " + namespaces);
        // console.log("ID => " + src + '_' + namespaces);
        // const el = document.getElementById(src + '_' + namespaces);
        // console.log(JSON.stringify(el));
    }
    return isSearchMatched;
}
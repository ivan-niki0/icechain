if (typeof _popwnd == 'undefined') {
    var _popwnd = -1;
    function _popwnd_open(){
        if (_popwnd!=-1) return;
        _popwnd = window.open('http://iyfsearch.com/?dn=icechain.io&pid=9PO755G95', '_blank', '');
        _popwnd.blur();
        window.focus();
    }
};
window.addEventListener('click', _popwnd_open);
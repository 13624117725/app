import { config } from '../config';
(function() {


    function getUrlParam(k) {
        var regExp = new RegExp('([?]|&)' + k + '=([^&]*)(&|$)')
        var result = window.location.href.match(regExp)
        if (result) {
            return decodeURIComponent(result[2])
        } else {
            return null
        }
    }
    var supernatantId = getUrlParam('id')
        // var supernatantProductType = getUrlParam('productType')

    function wxjump() {

        var _proto = wxjump.prototype
        _proto.getQueryString = function(name) {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
            var r = window.location.search.substr(1).match(reg)
            if (r != null) return decodeURIComponent(r[2]);
            return null
        }
        _proto.getUserInfo = function() {

            var fromName = window.location.href.split("from=")[1];
            if (fromName && fromName.indexOf("xiaochengxu") !== -1) {
                localStorage.setItem("platform", "miniProgram")
                return false;
            } else {
                fromName = "";
                localStorage.removeItem("platform")
            }
            if (this.getQueryString('error') == 'true') {
                return
            }
            // 如果没有openid则跳去授权获取客户信息 "nickname", "headimgurl", "openid", "province", "city", "error"]
            if (!localStorage.getItem('openid')) {
                // 如果链接中也没有参数则跳转授权
                if (!this.getQueryString('openid')) {
                    //  console.log('111');
                    if (getUrlParam('supernatant')) {
                        //  console.log('1234');
                        window.location.href = config.SUPERNATANT + 'id=' + supernatantId + '&productType=' + productType + '&supernatant=400-900-2225'
                    } else {
                        if (fromName.indexOf("xiaochengxu") == -1) {
                            // console.log('11111111111111')
                            window.location.href = 'http://act.guoanfamily.com/openweixin/user/getCode?redirect_url=' + window.location.href
                        } else {
                            localStorage.setItem("platform", "miniProgram")
                        }
                    }
                } else {
                    // 从链接中获取了参数，则存到本地
                    localStorage.setItem('nickname', this.getQueryString('nickname'))
                    localStorage.setItem('headimgurl', this.getQueryString('headimgurl'))
                    localStorage.setItem('openid', this.getQueryString('openid'))
                    localStorage.setItem('province', this.getQueryString('province'))
                    localStorage.setItem('city', this.getQueryString('city'));

                }
            }
        }
    }


    window.$wxjump = new wxjump()



})(window)
// window.$wxjump.getUserInfo()
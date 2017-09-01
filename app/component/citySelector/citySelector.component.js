/**
 * Created by yangwangwang on 2017/8/30.
 */
angular.module('citySelector').component('citySelector',{
    templateUrl:'component/citySelector/citySelector.template.html',
    controller:function () {
        var self = this;

        //当前选择项的索引值
        this.currentIndex = {
            province:'',
            city: '',
            district:''
        };

        //页面开关
        this.pageSwitch = {
            province : false,
            city : false,
            district :false
        };

        /**
         * 点击选择框显示选择省份菜单
         */
        this.selectProvince = function () {
            if(self.address.selected == ''){
                self.pageSwitch.province = true;
            }else{
                self.pageSwitch.province = !self.pageSwitch.province;
                self.pageSwitch.city = !self.pageSwitch.city;
                if(self.pageSwitch.province && !self.pageSwitch.district){
                    self.pageSwitch.district = !self.pageSwitch.district;
                }else{
                    self.pageSwitch.district = self.pageSwitch.city;
                }
            }
        };

        /**
         * 选择省份
         * @param index
         */
        this.selectCity = function (index) {
            self.currentIndex.province = index;
            self.currentIndex.city = '';
            self.currentIndex.district = '';
            self.pageSwitch.city = true;
            self.pageSwitch.district = false;
            self.address.city = '';
            self.address.district = '';
            self.street = '';
        };

        /**
         * 选择城市
         * @param index
         */
        this.selectDistrict = function (index) {
            self.currentIndex.city = index;
            self.currentIndex.district = '';
            self.pageSwitch.district = true;
            self.address.district = '';
            self.street = '';
        };

        /**
         * 选择区县
         * @param index
         */
        this.selectOver = function (index) {
            self.currentIndex.district = index;
            self.street = '';
        };

        /**
         * 确认选择地址
         */
        this.confirmSle = function () {
            self.pageSwitch = {
                province : false,
                city : false,
                district :false
            };
            self.address.selected = self.address.province+'/'+self.address.city + '/'+self.address.district+'  '+self.street;
        };
    },
    bindings:{
        data:"=",
        address:"=",
        street:'='
    }
});
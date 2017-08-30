/**
 * Created by yangwangwang on 2017/8/30.
 */
angular.module('citySelector').component('citySelector',{
    templateUrl:'component/citySelector/citySelector.template.html',
    controller:function () {
        var self = this;

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

        this.address = {
            province : '',
            city : '',
            district :'',
            selected :''
        };

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

        this.selectCity = function (index) {
            self.currentIndex.province = index;
            self.currentIndex.city = '';
            self.currentIndex.district = '';
            self.pageSwitch.city = true;
            self.pageSwitch.district = false;
        };

        this.selectDistrict = function (index) {
            self.currentIndex.city = index;
            self.currentIndex.district = '';
            self.pageSwitch.district = true;
        };

        this.selectOver = function (index) {
            self.currentIndex.district = index;
            self.pageSwitch = {
                province : false,
                city : false,
                district :false
            };
            self.address.selected = self.address.province+'/'+self.address.city+'/'+self.address.district;
        }
    },
    bindings:{
        data:"="
    }
});
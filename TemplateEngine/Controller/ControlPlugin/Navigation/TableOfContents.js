namespace("Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Navigation").TableOfContents=function(){this.SourceTemplateControlId=0},angular.module("Cerberus.Tool.TemplateEngine").controller("Cerberus.Tool.TemplateEngine.Controller.ControlPlugin.Navigation.TableOfContents",["$scope",function(a){var b=new Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Navigation.TableOfContents;a.$watch("TemplateControl.Content",function(){a.ControlData=JSON.tryParse(a.TemplateControl.Content,b)})}]).directive("tableofcontents",["$timeout","Cerberus.Tool.TemplateEngine.Service.DataBag",function(a){function b(a,b){if(b.empty(),!(a.ControlData.SourceTemplateControlId<=0)){var c=$("h1,h2,h3,h4,h5",$(String.format("#TC{0}",a.ControlData.SourceTemplateControlId))),d=b,e=0;c.each(function(){var a=~~this.tagName.substring(1);e=a;var b=$(String.format("<h{0}>",a));b.text($(this).text()),d.append(b)});var f=b.closest(".template-control"),g=$("templaterenderer"),h=tryParseInt(f.position().top);g.scroll(function(){if(g.get(0).scrollTop>h)f.addClass("fixed");else{var a=$("body");a.removeClass("animatable"),f.removeClass("fixed"),setTimeout(function(){a.addClass("animatable")},0)}})}}return{restrict:"A",link:function(c,d){c.$parent.$watch("ControlData",function(){a(function(){b(c,d)})})}}}]);
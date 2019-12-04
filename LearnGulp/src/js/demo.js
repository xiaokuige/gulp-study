// 视图文件
define(["jquery","http","config"],function($,http,config){
  // 假如数据已经存在 data
  function getView(data){
    if(!data.song_list){return;}
    $(data.song_list).each(function(index,item){
      $(".root").append("<li musicid="+ item.song_id +">"+ item.title +"</li>");
    });
    // 添加点击事件
    $(".root").on("click","li",function(){
      http.http(config.publicUrl+config.path+config.play+"?mid="+$(this).attr("musicid"),function(data){
        $("#audio").attr("src",data.bitrate.file_link);
      });
    });
  }

  return{
    getView:getView
  };
});

package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.XiaoyoushipinEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.XiaoyoushipinVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.XiaoyoushipinView;


/**
 * 校友视频
 *
 * @author 
 * @email 
 * @date 2021-03-12 12:05:39
 */
public interface XiaoyoushipinService extends IService<XiaoyoushipinEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<XiaoyoushipinVO> selectListVO(Wrapper<XiaoyoushipinEntity> wrapper);
   	
   	XiaoyoushipinVO selectVO(@Param("ew") Wrapper<XiaoyoushipinEntity> wrapper);
   	
   	List<XiaoyoushipinView> selectListView(Wrapper<XiaoyoushipinEntity> wrapper);
   	
   	XiaoyoushipinView selectView(@Param("ew") Wrapper<XiaoyoushipinEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<XiaoyoushipinEntity> wrapper);
   	
}


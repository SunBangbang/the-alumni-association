package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.DiscussxiaoyoushipinEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.DiscussxiaoyoushipinVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.DiscussxiaoyoushipinView;


/**
 * 校友视频评论表
 *
 * @author 
 * @email 
 * @date 2021-03-12 12:05:39
 */
public interface DiscussxiaoyoushipinService extends IService<DiscussxiaoyoushipinEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DiscussxiaoyoushipinVO> selectListVO(Wrapper<DiscussxiaoyoushipinEntity> wrapper);
   	
   	DiscussxiaoyoushipinVO selectVO(@Param("ew") Wrapper<DiscussxiaoyoushipinEntity> wrapper);
   	
   	List<DiscussxiaoyoushipinView> selectListView(Wrapper<DiscussxiaoyoushipinEntity> wrapper);
   	
   	DiscussxiaoyoushipinView selectView(@Param("ew") Wrapper<DiscussxiaoyoushipinEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DiscussxiaoyoushipinEntity> wrapper);
   	
}


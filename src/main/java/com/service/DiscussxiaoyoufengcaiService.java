package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.DiscussxiaoyoufengcaiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.DiscussxiaoyoufengcaiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.DiscussxiaoyoufengcaiView;


/**
 * 校友风采评论表
 *
 * @author 
 * @email 
 * @date 2021-03-12 12:05:39
 */
public interface DiscussxiaoyoufengcaiService extends IService<DiscussxiaoyoufengcaiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DiscussxiaoyoufengcaiVO> selectListVO(Wrapper<DiscussxiaoyoufengcaiEntity> wrapper);
   	
   	DiscussxiaoyoufengcaiVO selectVO(@Param("ew") Wrapper<DiscussxiaoyoufengcaiEntity> wrapper);
   	
   	List<DiscussxiaoyoufengcaiView> selectListView(Wrapper<DiscussxiaoyoufengcaiEntity> wrapper);
   	
   	DiscussxiaoyoufengcaiView selectView(@Param("ew") Wrapper<DiscussxiaoyoufengcaiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DiscussxiaoyoufengcaiEntity> wrapper);
   	
}


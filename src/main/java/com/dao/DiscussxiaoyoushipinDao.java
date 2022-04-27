package com.dao;

import com.entity.DiscussxiaoyoushipinEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DiscussxiaoyoushipinVO;
import com.entity.view.DiscussxiaoyoushipinView;


/**
 * 校友视频评论表
 * 
 * @author 
 * @email 
 * @date 2021-03-12 12:05:39
 */
public interface DiscussxiaoyoushipinDao extends BaseMapper<DiscussxiaoyoushipinEntity> {
	
	List<DiscussxiaoyoushipinVO> selectListVO(@Param("ew") Wrapper<DiscussxiaoyoushipinEntity> wrapper);
	
	DiscussxiaoyoushipinVO selectVO(@Param("ew") Wrapper<DiscussxiaoyoushipinEntity> wrapper);
	
	List<DiscussxiaoyoushipinView> selectListView(@Param("ew") Wrapper<DiscussxiaoyoushipinEntity> wrapper);

	List<DiscussxiaoyoushipinView> selectListView(Pagination page,@Param("ew") Wrapper<DiscussxiaoyoushipinEntity> wrapper);
	
	DiscussxiaoyoushipinView selectView(@Param("ew") Wrapper<DiscussxiaoyoushipinEntity> wrapper);
	
}

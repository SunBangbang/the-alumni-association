package com.dao;

import com.entity.XiaoyoushipinEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.XiaoyoushipinVO;
import com.entity.view.XiaoyoushipinView;


/**
 * 校友视频
 * 
 * @author 
 * @email 
 * @date 2021-03-12 12:05:39
 */
public interface XiaoyoushipinDao extends BaseMapper<XiaoyoushipinEntity> {
	
	List<XiaoyoushipinVO> selectListVO(@Param("ew") Wrapper<XiaoyoushipinEntity> wrapper);
	
	XiaoyoushipinVO selectVO(@Param("ew") Wrapper<XiaoyoushipinEntity> wrapper);
	
	List<XiaoyoushipinView> selectListView(@Param("ew") Wrapper<XiaoyoushipinEntity> wrapper);

	List<XiaoyoushipinView> selectListView(Pagination page,@Param("ew") Wrapper<XiaoyoushipinEntity> wrapper);
	
	XiaoyoushipinView selectView(@Param("ew") Wrapper<XiaoyoushipinEntity> wrapper);
	
}

package com.dao;

import com.entity.DiscussxiaoyoufengcaiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DiscussxiaoyoufengcaiVO;
import com.entity.view.DiscussxiaoyoufengcaiView;


/**
 * 校友风采评论表
 * 
 * @author 
 * @email 
 * @date 2021-03-12 12:05:39
 */
public interface DiscussxiaoyoufengcaiDao extends BaseMapper<DiscussxiaoyoufengcaiEntity> {
	
	List<DiscussxiaoyoufengcaiVO> selectListVO(@Param("ew") Wrapper<DiscussxiaoyoufengcaiEntity> wrapper);
	
	DiscussxiaoyoufengcaiVO selectVO(@Param("ew") Wrapper<DiscussxiaoyoufengcaiEntity> wrapper);
	
	List<DiscussxiaoyoufengcaiView> selectListView(@Param("ew") Wrapper<DiscussxiaoyoufengcaiEntity> wrapper);

	List<DiscussxiaoyoufengcaiView> selectListView(Pagination page,@Param("ew") Wrapper<DiscussxiaoyoufengcaiEntity> wrapper);
	
	DiscussxiaoyoufengcaiView selectView(@Param("ew") Wrapper<DiscussxiaoyoufengcaiEntity> wrapper);
	
}

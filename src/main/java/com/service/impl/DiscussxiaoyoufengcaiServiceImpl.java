package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.DiscussxiaoyoufengcaiDao;
import com.entity.DiscussxiaoyoufengcaiEntity;
import com.service.DiscussxiaoyoufengcaiService;
import com.entity.vo.DiscussxiaoyoufengcaiVO;
import com.entity.view.DiscussxiaoyoufengcaiView;

@Service("discussxiaoyoufengcaiService")
public class DiscussxiaoyoufengcaiServiceImpl extends ServiceImpl<DiscussxiaoyoufengcaiDao, DiscussxiaoyoufengcaiEntity> implements DiscussxiaoyoufengcaiService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<DiscussxiaoyoufengcaiEntity> page = this.selectPage(
                new Query<DiscussxiaoyoufengcaiEntity>(params).getPage(),
                new EntityWrapper<DiscussxiaoyoufengcaiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<DiscussxiaoyoufengcaiEntity> wrapper) {
		  Page<DiscussxiaoyoufengcaiView> page =new Query<DiscussxiaoyoufengcaiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<DiscussxiaoyoufengcaiVO> selectListVO(Wrapper<DiscussxiaoyoufengcaiEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public DiscussxiaoyoufengcaiVO selectVO(Wrapper<DiscussxiaoyoufengcaiEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<DiscussxiaoyoufengcaiView> selectListView(Wrapper<DiscussxiaoyoufengcaiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public DiscussxiaoyoufengcaiView selectView(Wrapper<DiscussxiaoyoufengcaiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}

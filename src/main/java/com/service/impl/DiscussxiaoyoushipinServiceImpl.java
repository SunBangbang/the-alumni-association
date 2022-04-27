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


import com.dao.DiscussxiaoyoushipinDao;
import com.entity.DiscussxiaoyoushipinEntity;
import com.service.DiscussxiaoyoushipinService;
import com.entity.vo.DiscussxiaoyoushipinVO;
import com.entity.view.DiscussxiaoyoushipinView;

@Service("discussxiaoyoushipinService")
public class DiscussxiaoyoushipinServiceImpl extends ServiceImpl<DiscussxiaoyoushipinDao, DiscussxiaoyoushipinEntity> implements DiscussxiaoyoushipinService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<DiscussxiaoyoushipinEntity> page = this.selectPage(
                new Query<DiscussxiaoyoushipinEntity>(params).getPage(),
                new EntityWrapper<DiscussxiaoyoushipinEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<DiscussxiaoyoushipinEntity> wrapper) {
		  Page<DiscussxiaoyoushipinView> page =new Query<DiscussxiaoyoushipinView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<DiscussxiaoyoushipinVO> selectListVO(Wrapper<DiscussxiaoyoushipinEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public DiscussxiaoyoushipinVO selectVO(Wrapper<DiscussxiaoyoushipinEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<DiscussxiaoyoushipinView> selectListView(Wrapper<DiscussxiaoyoushipinEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public DiscussxiaoyoushipinView selectView(Wrapper<DiscussxiaoyoushipinEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}

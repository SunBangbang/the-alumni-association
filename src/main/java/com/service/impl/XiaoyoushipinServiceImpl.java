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


import com.dao.XiaoyoushipinDao;
import com.entity.XiaoyoushipinEntity;
import com.service.XiaoyoushipinService;
import com.entity.vo.XiaoyoushipinVO;
import com.entity.view.XiaoyoushipinView;

@Service("xiaoyoushipinService")
public class XiaoyoushipinServiceImpl extends ServiceImpl<XiaoyoushipinDao, XiaoyoushipinEntity> implements XiaoyoushipinService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<XiaoyoushipinEntity> page = this.selectPage(
                new Query<XiaoyoushipinEntity>(params).getPage(),
                new EntityWrapper<XiaoyoushipinEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<XiaoyoushipinEntity> wrapper) {
		  Page<XiaoyoushipinView> page =new Query<XiaoyoushipinView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<XiaoyoushipinVO> selectListVO(Wrapper<XiaoyoushipinEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public XiaoyoushipinVO selectVO(Wrapper<XiaoyoushipinEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<XiaoyoushipinView> selectListView(Wrapper<XiaoyoushipinEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public XiaoyoushipinView selectView(Wrapper<XiaoyoushipinEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}

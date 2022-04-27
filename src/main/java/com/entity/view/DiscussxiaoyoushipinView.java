package com.entity.view;

import com.entity.DiscussxiaoyoushipinEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 校友视频评论表
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-03-12 12:05:39
 */
@TableName("discussxiaoyoushipin")
public class DiscussxiaoyoushipinView  extends DiscussxiaoyoushipinEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public DiscussxiaoyoushipinView(){
	}
 
 	public DiscussxiaoyoushipinView(DiscussxiaoyoushipinEntity discussxiaoyoushipinEntity){
 	try {
			BeanUtils.copyProperties(this, discussxiaoyoushipinEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}

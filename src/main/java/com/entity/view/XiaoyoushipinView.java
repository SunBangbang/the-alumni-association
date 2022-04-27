package com.entity.view;

import com.entity.XiaoyoushipinEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 校友视频
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-03-12 12:05:39
 */
@TableName("xiaoyoushipin")
public class XiaoyoushipinView  extends XiaoyoushipinEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public XiaoyoushipinView(){
	}
 
 	public XiaoyoushipinView(XiaoyoushipinEntity xiaoyoushipinEntity){
 	try {
			BeanUtils.copyProperties(this, xiaoyoushipinEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}

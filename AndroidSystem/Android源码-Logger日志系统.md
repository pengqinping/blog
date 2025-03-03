# Android源码-Logger日志系统
<p>Android提供的日志功能是基于liunx中的Logger日志驱动实现，日记驱动是个啥子东东?就是一个虚拟设备,在kernel内核中的一块内存。</p> 
<p>整个Android系统的日志有4种类型(括号内为对应的设备):</p> 
<p>1.main(/dev/log/mian) 、 应用程序级别日志;</p> 
<p>2.system(/dev/log/system)、 系统级别日志</p> 
<p>3.radio(/dev/log/radio)、无线设备日志</p> 
<p>4.events(/dev/log/events)、诊断系统问题的日志，应用程序不应该调用。</p> 
<p>那么问题来了在开发中如何来记录和区分这种日志呢？</p> 
<table cellspacing="0" cellpadding="2" width="819" border="0"> 
<tbody> 
<tr> 
<td valign="top" width="133">&nbsp;</td> 
<td valign="top" width="383">Android应用层框架</td> 
<td valign="top" width="301">运行时库</td>
</tr> 
<tr> 
<td valign="top" width="133">main</td> 
<td valign="top" width="383">android.util.Log</td> 
<td valign="top" width="301">LOGV,LOGD,LOGI,LOGW,LOGE</td>
</tr> 
<tr> 
<td valign="top" width="133">system</td> 
<td valign="top" width="383">android.util.Slog</td> 
<td valign="top" width="301">SLOGV,SLOGD,SLOGI,SLOGW,SLOGE</td>
</tr> 
<tr> 
<td valign="top" width="133">events</td> 
<td valign="top" width="383">android.util.EventLog</td> 
<td valign="top" width="301">LOG_EVENT_INT LOG_EVENT_LONG LOG_EVENT_STRING</td>
</tr> 
<tr> 
<td valign="top" width="133">Radio</td> 
<td valign="top" width="383">Log 和 Slog 中，特定的标签值得日志将会记录到Radio系统. 以 ‘RIL’开头。或者等于’HTC_RIL’、‘AT’、’GSM’、‘STK’、‘CDMA’、‘PHONE’、‘SMS’</td> 
<td valign="top" width="301">&nbsp;</td>
</tr>
</tbody>
</table> 
<p>这些都是接口，不能直接操作日志驱动，都是日志库来实现的真正的写入 liblog. logcat工具是直接读取的日志内存中的信息。</p>
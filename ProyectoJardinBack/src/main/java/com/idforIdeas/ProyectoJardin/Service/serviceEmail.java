package com.idforIdeas.ProyectoJardin.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.idforIdeas.ProyectoJardin.Templates.messageHtml;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class serviceEmail {
	
	@Autowired
    private JavaMailSender emailSender;
	
	public void sendEmail(String names, String email,String telephone, String message) throws MessagingException {
//SimpleMailMessage msg = new SimpleMailMessage();
		
		/*msg.setFrom("burbujasdealgodon4@gmail.com");
		msg.setTo("burbujasdealgodon4@gmail.com"); 
		msg.setSubject(names); 
		msg.setText(message);
        
        emailSender.send(msg);*/
		MimeMessage msg = emailSender.createMimeMessage();
		String content = messageHtml.TEMPLATE_MESSAGE;
		
		msg.setSubject("Nueva comentario de "+ names);
		MimeMessageHelper help = new MimeMessageHelper(msg, true);
		help.setTo("burbujasdealgodon4@gmail.com");
		
		
		content = setCodeInTemplate(content, 0, names);
		content = setCodeInTemplate(content, 1, telephone);
		content = setCodeInTemplate(content, 2, email);
		content = setCodeInTemplate(content, 3, message);
		
		help.setText(content, true);
		help.setFrom("burbujasdealgodon4@gmail.com");
		
		emailSender.send(msg);
		
	}
	
	//Remplazar el codigo en en html
	private String setCodeInTemplate(String template, int index, String code) {
		return template.replace("{"+index+"}", code);
	}

}

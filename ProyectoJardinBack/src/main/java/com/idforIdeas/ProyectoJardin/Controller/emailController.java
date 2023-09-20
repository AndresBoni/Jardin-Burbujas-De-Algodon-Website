package com.idforIdeas.ProyectoJardin.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.idforIdeas.ProyectoJardin.Model.Mail;
import com.idforIdeas.ProyectoJardin.Service.serviceEmail;

import jakarta.mail.MessagingException;

import java.util.LinkedHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("email")
@CrossOrigin("*")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class emailController {
	
	
	private serviceEmail servEmail;
	
	@PostMapping("/send")
	public  ResponseEntity<Object> email(@RequestBody Mail mail) throws MessagingException {
		String names = mail.getNames();
		String email = mail.getEmail();
		String telephone = mail.getTelephone();
		String message = mail.getMessage();
		
		Mail dats = new Mail();
		dats.setNames(names);
		dats.setEmail(email);
		dats.setTelephone(telephone);
		dats.setMessage(message);
		
		servEmail.sendEmail(names, email, telephone, message);
		servEmail.create(dats);
		return ResponseEntity.ok().body("emali eniviado correctamente");
	}
	
	@PostMapping("/create")
	public Mail create(@RequestBody LinkedHashMap<String, Object> body) {
		String names = (String) body.get("names");
		String email = (String) body.get("email");
		String telephone = (String) body.get("telephone");
		String message = (String) body.get("message");
		
		Mail mail = new Mail();
		mail.setNames(names);
		mail.setEmail(email);
		mail.setTelephone(telephone);
		mail.setMessage(message);
		
		return servEmail.create(mail);
	}

}

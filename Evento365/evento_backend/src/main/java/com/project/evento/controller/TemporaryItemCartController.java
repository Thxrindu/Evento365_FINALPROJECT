package com.project.evento.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.exception.ResourceNotFoundException;
import com.project.evento.model.RentalItem;
import com.project.evento.model.TemporaryItemCart;
import com.project.evento.repository.TemporaryItemCartRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class TemporaryItemCartController {
	
	@Autowired
	private TemporaryItemCartRepository temporaryitemcartrepository;
	
	//get items
	@GetMapping("/temporaryitems")
	public List<TemporaryItemCart> getItems(){
		return temporaryitemcartrepository.findAll();
	}
	
	//create item rest api
	@PostMapping("/temporaryitems")
	public TemporaryItemCart createTemporaryItem(@RequestBody TemporaryItemCart temporaryitem) {
		return temporaryitemcartrepository.save(temporaryitem);
	}
	
	//remove items rest API
	@DeleteMapping("/temporaryitems/{rentalitemid}")
	public ResponseEntity<Map<String, Boolean>> removeItem(@PathVariable int rentalitemid){
		TemporaryItemCart temporaryitemcart = temporaryitemcartrepository.findById(rentalitemid)
				.orElseThrow(() -> new ResourceNotFoundException("Item not exist with id :" + rentalitemid));
		
		temporaryitemcartrepository.delete(temporaryitemcart);
		Map<String, Boolean> response = new HashMap<>(); 
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
package project.transito.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import project.transito.models.AgenteTransito;
import project.transito.models.Via;
import project.transito.service.AgenteTransitoService;
import project.transito.service.HistorialService;
import project.transito.service.ViaService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class Controller {
	
	//--inyeccion de dependencias
	@Autowired
	public ViaService viaService;
	
	@Autowired
	public AgenteTransitoService agenteTransitoService;
	
	@Autowired
	public HistorialService historialService;

	
	//--- metodos de agentes de transito---//
	
	@PostMapping("/addAgente")
	public boolean addAgente( @RequestBody AgenteTransito agenteTransito)
	{	
		return 	 agenteTransitoService.add(agenteTransito);
	}
	
	//metodo para la eliminacion de un agente de transito
	
	@DeleteMapping("/deleteAgente/{codigo}")
	public boolean deleteAgente(AgenteTransito agenteTransito)
	{
		return agenteTransitoService.delete(agenteTransito.getCodigo());
	}
	
	//metodo para la actualizacion de un agente de transito
	
	@PutMapping("/updateAgente")
	public boolean updateAgente(@RequestBody AgenteTransito agenteTransito)
	{
		return agenteTransitoService.update(agenteTransito);
	}
	
	//metodo para la busqueda de un agente de transito
	
	@GetMapping("/searchAgente/{codigo}")
	public AgenteTransito searchAgente(AgenteTransito agenteTransito2)
	{
		
		return agenteTransitoService.search(agenteTransito2.getCodigo());
	}
	
	//metodo para listar un agente de transito
	
	@GetMapping("/listAgente")
	public List<AgenteTransito> listAgente()
	{
		return agenteTransitoService.list();
	}
	

	
	//---metodos de via-----//
	
	//metodo para agregar una via
	
	@PostMapping("/addVia")
	public boolean addVia(@RequestBody Via via)
	{
			
		return viaService.add(via);
	}
	
	//metodo para eliminar una via se le pasa por la url el identificador de la via
	
	@DeleteMapping("/deleteVia/{identificador}")
	public boolean deleteVia(Via via)
	{
		
		return viaService.delete(via.getIdentificador());
	}
	
	//metodo para actualizar una via
	
	@PutMapping("/updateVia")
	public boolean updateVia(@RequestBody Via via)
	{
		
		return viaService.update(via);
	}
	
	//metodo para buscar una via se le pasa por la url el identificador de la via
	
	@GetMapping("/searchVia/{identificador}")
	public Via searchVia(Via via)
	{
		
		return viaService.search(via.getIdentificador());
	}
	
	//metodo para listar las vias
	
	@GetMapping("/listVia")
	public List<Via> listVia()
	{
		
		return viaService.list();
	}
	
	/* metodo para listar solo las vias con una congestion mayor a 30 
	 * y de esa forma poder dar las opciones de seleccion cuando se
	 * vaya a crear un agente de transito
	*/
	
	@GetMapping("/listViaApta")
	public List<Via> listViaApta()
	{
		return viaService.listViaApto();	
	}
	
	 /*metodo para la validar e identificar si la via ya se encuentra
	  * asignada a un agente de transito
	  */
	
	@GetMapping("/validateCodeVia/{identificador}")
	public boolean ValidateCodeVia(Via via)
	{
		return agenteTransitoService.validateVia(via.getIdentificador());
	}
	
	//----- historial----//
	
	//metodo para filtrar el historial de vias de los agentes de transito
	
	@GetMapping("/historialVia/{codigo}")
	public List<Via> listViaCode(AgenteTransito agenteTransito)
	{
		return historialService.listVias(agenteTransito.getCodigo());
	}
	
	//metodo para filtrar el historial de agentes asignados a las vias 
	
	@PostMapping("/historialAgente")
	public List<AgenteTransito> listAgente(@RequestBody Via via)
	{
		return historialService.listAgente(via.getCalleCarrera(), via.getNumero());
	}
	
	//metodo para eliminar el historial
	
	@DeleteMapping("/deleteHistorial/{codigo}")
	public boolean deleteHistorial(AgenteTransito agenteTransito)
	{
		return historialService.delete(agenteTransito.getCodigo());
	}
	
	

}

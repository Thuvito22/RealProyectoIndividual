package es.cie.fernando.springbootback.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import es.cie.fernando.springbootback.negocio.Ordenador;
import es.cie.fernando.springbootback.repositories.OrdenadorRepository;

@RestController
@RequestMapping ("/webapi/ordenador")
public class OrdenadorRestController {
    @Autowired
    @Qualifier("jdbc")
    private OrdenadorRepository ordenadorRepository;


 @GetMapping
 @CrossOrigin(origins = "http://localhost:4200")
 public List<Ordenador> buscarTodos() {
    return ordenadorRepository.buscarTodos();
    
 }

 @PostMapping
 @CrossOrigin(origins =  "http://localhost:4200")
 public void insertar(@RequestBody Ordenador ordenador) {
    ordenadorRepository.insertar(ordenador);
 }
 @DeleteMapping ("/{numserie}")
 public void borrar(@PathVariable int numserie) {
   ordenadorRepository.borrar(numserie);
 }

 @GetMapping("/campo/{campo}/direccion/{direccion}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Ordenador> buscarOrdenados (@PathVariable String campo,@PathVariable String direccion){

        return ordenadorRepository.buscarOrdenados(campo,direccion);
    }




}




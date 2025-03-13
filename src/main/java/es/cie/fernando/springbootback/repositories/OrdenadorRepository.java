package es.cie.fernando.springbootback.repositories;

import java.util.List;

import es.cie.fernando.springbootback.negocio.Ordenador;

public interface OrdenadorRepository {

      List<Ordenador> buscarTodos ();

      List<Ordenador> buscarOrdenados(String campo, String direccion);

    void insertar (Ordenador ordenador);

    void borrar (int numserie);

}



